import { User } from '../models/user.models.js';
import asyncHandler from '../utils/asyncHandler.js';
import {ApiError} from '../utils/apiError.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/apiResponse.js';
import jwt from 'jsonwebtoken';

const generateAccessAndRefreshToken = async(userId) =>{
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false});

        return {accessToken,refreshToken};

    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating access or refreshToken");
    }
}

const registerUser = asyncHandler(async (req,res) =>{
    const { name, email, password,role,mobile,adminSecret} = req.body;
    if(!name || !email || !password || !mobile){
        throw new ApiError(400, "Please provide all required fields");
    }

    const existingUser = await User.findOne({email: email});
    if(existingUser){
        throw new ApiError(400, "User with this email already exists");
    }

    if(role === "admin" && adminSecret !== process.env.ADMIN_SECRET_KEY){
        throw new ApiError(403, "Invalid admin secret");
    }

    const avatarPath = req.file?.path ;
    
    const avatar = avatarPath ? await uploadOnCloudinary(avatarPath) : null;

    const user = await User.create({
        name,
        email,
        password,
        role,
        mobile,
        avatar: avatar ? avatar.url : ""
    });
    const userCreated = await User.findById(user._id).select("-refreshToken");

    if(!userCreated){
        throw new ApiError(500, "User registration failed");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    if(!accessToken || !refreshToken){
        throw new ApiError(500, "Failed to generate tokens");
    }

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(201)
    .cookie("refreshToken",refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
        new ApiResponse(201, userCreated, "User registered successfully")
    )

})

const loginUser = asyncHandler( async (req,res)=>{
    const { email,password} = req.body;
    if(!email || !password){
        throw new ApiError(400, "Please provide email and password");
    }

    const user = await User.findOne({email:email})

    if(!user){
        throw new ApiError(404, "User not found");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid password");
    }

    

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    if(!accessToken || !refreshToken){
        throw new ApiError(500, "Failed to generate tokens");
    }

    const loggedInUser = await User.findById(user._id).select("-refreshToken -password");

    const options = {
        httpOnly: true,
        secure: true
    }

    if(!loggedInUser.isValidated){
        return res
        .status(300)
        .cookie("refreshToken",refreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json(
            new ApiResponse(300,loggedInUser,"You have not been validated yet. Please contact the admin to validate your account.")
        )
    }

    return res
    .status(200)
    .cookie("refreshToken",refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
        new ApiResponse(200, loggedInUser, "User logged in successfully")
    )
})

const logoutUser = asyncHandler(async (req ,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(
        new ApiResponse(200, null, "User logged out successfully")
    )
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken ;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "No refresh token provided");
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
        if (!decodedToken) {
            throw new ApiError(401, "Invalid refresh token");
        }
        const user = await User.findById(decodedToken._id).select("-refreshToken -password");
        if (!user) {
            throw new ApiError(404, "User not found");
        }
        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user?._id);
        if (!accessToken || !refreshToken) {
            throw new ApiError(500, "Failed to generate tokens");
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
        return res
            .status(200)
            .cookie("refreshToken", refreshToken, options)
            .cookie("accessToken", accessToken, options)
            .json(
                new ApiResponse(200, { accessToken, refreshToken }, "Access token refreshed successfully")
        );
    } catch (error) {
        throw new ApiError(401, error?.message ||"Unauthorized access or something went wrong");
    }
})

const changePassword = asyncHandler(async (req, res) => {
    const {oldPassword, newPassword} = req.body;
    if(!oldPassword || !newPassword){
        throw new ApiError(400, "Please provide old and new password");
    }

    const user = await User.findById(req.user._id);
    if(!user){
        throw new ApiError(404, "User not found");
    }

    const isPasswordValid = await user.isPasswordCorrect(oldPassword);
    if(!isPasswordValid){
        throw new ApiError(401, "Invalid old password");
    }

    user.password = newPassword;
    await user.save({ validateBeforeSave: true });

    return res
    .status(200)
    .json(
        new ApiResponse(200,{}, "Password changed successfully")
    )
})

const changeAvatar = asyncHandler(async (req, res) => {
    const avatarPath = req.file?.path;
    if (!avatarPath) {
        throw new ApiError(400, "Please provide an avatar image");
    }
    const avatar = await uploadOnCloudinary(avatarPath);
    if (!avatar) {
        throw new ApiError(500, "Failed to upload avatar");
    }

    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
             avatar: avatar.url
     },
        { 
            new: true
        }
    );

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, {avatar: avatar.url}, "Avatar updated successfully")
        );
})

const getUserProfile = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-refreshToken -password");
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    return res
        .status(200)
        .json(
            new ApiResponse(200, user, "User profile retrieved successfully")
    );
})


export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changePassword,
    changeAvatar,
    getUserProfile
};