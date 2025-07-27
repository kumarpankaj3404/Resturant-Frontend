import { User } from '../models/user.models.js';
import asyncHandler from '../utils/asyncHandler.js';
import {ApiError} from '../utils/apiError.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import {ApiResponse} from '../utils/apiResponse.js';

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

    const avatarPath = req.file?.avatar[0]?.path ;
    
    const avatar = avatarPath ? await uploadOnCloudinary(avatarPath) : null;

    const user = await User.create({
        name,
        email,
        password,
        role,
        mobile,
        avatar: avatar ? avatar.url : ""
    });

    const userCreated = await User.findById(user._id).select("-password -refreshToken");

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

export {
    registerUser
};