import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (path) =>{
    try {
        if(!path) {
            return null;
        }

        const response = await cloudinary.uploader.upload(path, {
            folder: "restaurant-management"
        });
        fs.unlinkSync(path); // Remove the file from local storage after upload
        return response;

    } catch (error) {
        fs.unlinkSync(path); // Clean up the file in case of error
        return null;
    }
}

export { uploadOnCloudinary };