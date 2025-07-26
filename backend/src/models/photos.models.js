import mongoose,{Schema} from "mongoose";

const photoSchema = new Schema({
    url:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
        enum: ["Food", "Interior","Exterior", "Staff", "Events"]
    },
})

export const Photos = mongoose.model("Photos", photoSchema);