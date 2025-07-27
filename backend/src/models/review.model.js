import mongoose,{Schema} from "mongoose";

const reviewSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    rating:{
        type: Number,
        required: true,
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating cannot exceed 5"]
    },
    reviewPhoto:{
        type: String
    },
    menuItem:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true
    }

})