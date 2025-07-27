import mongoose,{Schema} from "mongoose";

const orderItemsSchema = new Schema({
    menuItem:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        min: [1, "Quantity must be at least 1"]
    },
    price:{
        type: Number,
        required: true
    }
}, { _id: false });       
const orderSchema = new Schema({
    items: [orderItemsSchema],
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
    },
    orderNumber:{
        type: String,
        required: true,
        unique: true
    },
    tableNumber:{
        type: String,
        required: true,
        trim: true
    }
},{ timestamps: true });

orderSchema.pre("save", function(next) {
    if (!this.orderNumber) {
        this.orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    next();
});
export const Order = mongoose.model("Order", orderSchema);