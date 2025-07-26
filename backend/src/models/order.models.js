import mongoose,{Schema} from "mongoose";

const orderSchema = new Schema({
    items:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true
        }
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    totalAmount:{
        type: Number,
        required: true,
        min: [0, "Total amount cannot be negative"]
    },
    status:{
        type: String,
        enum: ["Confirming", "Preparing", "Prepared","Delivered", "Cancelled"],
        default: "Confirming"
    },
    payment:{
        type: String,
        enum: ["Cash", "Card", "Online"],
        default: "Cash"
    }
},{ timestamps: true });

export const Order = mongoose.model("Order", orderSchema);