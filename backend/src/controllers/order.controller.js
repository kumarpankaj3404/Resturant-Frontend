import { Order } from "../models/order.models.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const newOrder = asyncHandler(async (req,res)=>{
    const { items, totalAmount, payment, tableNumber } = req.body;
    if(!items || !totalAmount || !tableNumber){
        throw new ApiError(400,"Provide all the required fields to add a new Order")
    }

    

})