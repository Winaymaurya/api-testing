import userModel from "../models/userModel.js"

export const createUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email){
            return res.status(500).send({
                success:false,
                message:"Please Enter email",
                
            })
        }
        if(!password){
            return res.status(500).send({
                success:false,
                message:"Please Enter password",
                
            })
        }
        // let email='vinay'
        // let password='vinay'
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(400).send({
                success:false,
                message:`Already registered Please Login`
            })
        }
        const user =await new userModel({
            email,
            password
        }).save();
        res.status(201).send({
            success:true,
            message:"User created",
            user
        })
    }
    catch(error){
        return res.status(500).send({
            success:false,
            message:"Something Wrong In register",
            error
        })
    }
} 