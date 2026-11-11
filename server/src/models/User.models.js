import mongoose from "mongoose"

const UserSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            lowercase:true
        },
        phone:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            select:false
        },
        role:{
            type:String,
            enum:["family-member","health-worker","health-officer","admin"],
            required:true
        },
        status:{
            type:String,
            enum:["active","pending","rejected"],
            required:true
        },
        refreshToken:{
            type:String
        }
    },
    {timestamps:true}
)


const User = mongoose.model("User",UserSchema)
export default User;