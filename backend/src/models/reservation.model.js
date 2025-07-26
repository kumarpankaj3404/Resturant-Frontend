import mongoose,{Schema} from "mongoose";

const reservationSchema = new Schema({
    by_user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    for:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    time:{
        type: String,
        required: true,
        trim: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/, // HH:mm format
    },
    guests:{
        type: Number,
        required: true,
        min: [1, "At least one guest is required"]
    }
},{ timestamps: true });

export const Reservation = mongoose.model("Reservation", reservationSchema);