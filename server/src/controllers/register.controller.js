import User from "../models/User.models.js";
import { ApiError } from "../utils/ApiError.js";
import bcrypt from "bcryptjs"
import { ApiResponse } from "../utils/ApiResponse.js";


export const registerChild = async (req,res) =>{
    try {
        const {name,email,phone,password,confirmPassword} = req.body
        if([name,email,phone,password,confirmPassword].some((field) => !field || field?.trim() === "")){
            throw new ApiError(400,"Fields can't be empty")
        }

        if(password !== confirmPassword){
            throw new ApiError(400,"Both passwords should be same");
        }
        
        const existingUser =await User.findOne({email})
        if(existingUser){
            throw new ApiError(400,"Email already registered")
        }

        const hashedPassword =await bcrypt.hash(password,10);

        const newUser = await User.create({
            name,
            email,
            phone,
            password:hashedPassword,
            role:"family-member",
            status:"active"
        })

        const createdUser = await User.findById(newUser._id).select(
            "-password -refreshToken"
        )

        if(!createdUser){
            throw new ApiError(400,"Something went wrong while creating User")
        }
        return res.status(201).json(
            new ApiResponse(201,"Registration Successful",{
                id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                phone:newUser.phone,
                role:newUser.role,
                status:newUser.status
            },
        )
        )

    } catch (error) {
        throw new ApiError(400,error.message ||"Something went wrong");
    }

}