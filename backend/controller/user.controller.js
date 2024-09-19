import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup= async (req,res)=>{
    console.log("Request body:", req.body);
    try{
const {fullname,email,password}=req.body;
const user = await User.findOne({ email });
if (user) {
  return res.status(400).json({ message: "User already exists." });
}
const hashPassword= await bcryptjs.hash(password,10)
const createdUser= new User({
    fullname: fullname,
    email: email,
    password: password,
});
// console.log(createdUser, "hiii")
await createdUser.save();


res.status(200).json({message:"user created successfully",user:{
    _id:user._id,
    fullname:user.fullname,
    email:user.email,
}})


    }catch (error) {
        console.error("Error during user save:", error); // Detailed error logging
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
    
};
export const login = async (req,res)=>{
    try{
        
const {email,password}= req.body;
const user = await User.findOne({email});
const isMatch= await bcryptjs.compare(password,user.password)
if(!user || !isMatch){
    return res.status(400).json({message:"invalid username or password"});
}else{
    res.status(200).json({message:"login successful",user:{
        _id:user._id,
        fullname:user.fullname,
        email:user.email
    }})
}
    }catch(error){
console.log("error:"+error.message)
res.status(500).json({message:"internal server error"})
    }
}