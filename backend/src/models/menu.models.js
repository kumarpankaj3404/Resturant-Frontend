import mongoose,{Schema} from "mongoose";

const menuSchema = new Schema({
    category:{
        type: String,
        required: true,
        trim: true,
        enum: ["Starters", "Main Course", "Breads","Rice", "Beverages", "Desserts", "Salads","Combo","Snacks","Others"],
    },
    cuisine:{
        type: String,
        required: true,
        trim: true
    },
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: [40, "Name cannot exceed 40 characters"]
    },
    thumbnail:{
        type: String
    },
    price:{
        type: Number,
        required: true,
        min: [0, "Price cannot be negative"]
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxlength: [200, "Description cannot exceed 200 characters"]
    },
    isAvailable:{
        type: Boolean,
        default: true
    }
}, {timestamps: true});


export const Menu = mongoose.model("Menu", menuSchema);