import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: 5
    },
    role:{
        type: String,
        enum: ["user", "staff","admin"],
        default: "user"
    },
    mobile:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    avatar:{
        type: String
    },
    refreshToken:{
        type: String,
        default: null
    },
    isValidated:{
        type: Boolean,
        default: false
    }
},{timestamps: true,})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    if(this.role === "user" || this.role === "admin"){
        this.isValidated = true; // Automatically validate users
    }
    next();
})

userSchema.methods.isPasswordCorrect = async function(enteredPassword){
    return await bcrypt.compare(
        enteredPassword,
        this.password
    )
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        role: this.role,
        name: this.name,
    }, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id: this._id
    }, process.env.REFRESH_TOKEN_SECRET,{
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    });
}


export const User = mongoose.model("User", userSchema);
