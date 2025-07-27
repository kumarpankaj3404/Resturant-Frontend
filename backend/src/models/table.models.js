import mongoose,{Schema} from "mongoose";

const tableSchema = new Schema({
    capacity: {
        type: Number,
        required: true,
        min: [1, "Capacity must be at least 1"]
    },
    location: {
        type: String,
        required: true,
        trim: true,
        enum: ["Indoor", "Outdoor", "Balcony", "VIP"]
    },
    totalSeats:{
        type: Number,
        required: true,
        min: [1, "Total seats must be at least 1"]
    }
}, {timestamps: true});

export const Table = mongoose.model("Table", tableSchema);