import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    image:String,
    name:String
});

const UserModel=mongoose.model("user",UserSchema);

export default UserModel;