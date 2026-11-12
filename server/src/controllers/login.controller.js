import User from "../models/User.models.js";
import { ApiError } from "../utils/ApiError.js";
import bcrypt from "bcryptjs";
import { ApiResponse } from "../utils/ApiResponse.js";

export const Login =async (req,res) =>{
    const {email,password} = req.body;
    if([email,password].some((field) => !field || field?.trim() === "")){
        throw new ApiError(401,"Email or Password can't be empty")
    }

    const existingUser= await User.findOne({email}).select("+password");
    if(!existingUser){
        throw new ApiError(401,"No accounts with that email exists");
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
    );

    if(!isPasswordCorrect){
        throw new ApiError(401,"Invalid email or password");
    }

    return res
    .json(new ApiResponse(200,
        "User logged in successfully",
        {
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
            status: existingUser.status
        },
    ))
    
}