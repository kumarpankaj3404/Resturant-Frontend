import { Menu } from "../models/menu.models.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const addMenuItem = asyncHandler(async (req, res) => {
    const { category, cuisine, name, price, description} = req.body;

    if (!category || !cuisine || !name || !price || !description) {
        throw new ApiError(400, "All fields are required");
    }

    const thumbnailPath = req.file?.path;
    if (!thumbnailPath) {
        throw new ApiError(400, "Menu thumbnail is required");
    }

    const menuThumbnail = await uploadOnCloudinary(thumbnailPath, "menuItems");

    const newMenuItem = await Menu.create({
        category,
        cuisine,
        name,
        menuThumbnail: menuThumbnail.url,
        price,
        description,
    });

    if (!newMenuItem) {
        throw new ApiError(500, "Failed to add menu item");
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201, newMenuItem, "Menu item added successfully")
    )
})

const getMenuItems = asyncHandler(async (req, res) => {
    const menuItems = await Menu.find({ isAvailable: true });

    if (!menuItems || menuItems.length === 0) {
        throw new ApiError(404, "No menu items found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, menuItems, "Menu items retrieved successfully"));
})

const updateItem = asyncHandler(async (req,res) => {
    const {menuId} = req.params;
    if(!menuId){
        throw new ApiError(403,"Menu Id is not provided!! Please Provide Menu ID to update Item")
    }
    const updates = req.body;
    if(!updates){
        throw new ApiError(403,"Update parameters are required!!")
    }

    if(req.file){
        const cloud = await uploadOnCloudinary(req.file.path,"menuItems");
        if(!cloud){
            throw new ApiError(500,"Failed to upload thumbnail on cloudinary");
        }
        console.log("this was run");

        updates.menuThumbnail = cloud.url ;
    }

    const menuItem = await Menu.findByIdAndUpdate(menuId,
        updates
        ,{
            new: true
        }
    )
    if(!menuItem){
        throw new ApiError(403,"Can't find Item by menuId")
    }

    return res
    .status(201)
    .json(
            new ApiResponse(200,menuItem,"Menu Item successfully updated")
    )
})

const deleteItem = asyncHandler(async (req,res) => {
    const {menuId} = req.params
    if(!menuId){
        throw new ApiError(403,"Menu Id is not provided!! Please Provide Menu ID to update Item")
    }

    const menuItem = await Menu.findByIdAndDelete(
        menuId,
        {
            new:true
        }
    );
    if(!menuItem){
        throw new ApiError(400,"Menu item by id is invalid!! Not Found")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(201,{},"Successfully deleted the MenuItem")
    )

})




export {
    addMenuItem,
    getMenuItems,
    updateItem,
    deleteItem
}