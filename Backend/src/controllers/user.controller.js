const User = require ("../models/user.model");
const experss = require("express")

const router = experss.Router()
const register = async (req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email}).lean().exec();
        let username = await User.findOne({username:req.body.username}).lean().exec();
        
        if(user || username){
            return res.status(201).send("email already exist");
        }

        user = await User.create(req.body);
        return res.status(201).send(user);

    }catch(e){
        return res.status(400).json({ status:"failled", messege: e.messege});
    }
}

const login = async (req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email});
        let username = await User.findOne({username:req.body.username});
        console.log(user,username);

        if(!user && !username){
            return res.status(400).send("email or password is incorrect");

        }
        console.log("aaaa");




        if(!user){
            const match = await username.checkPassword(req.body.password);
            console.log(match);
            if(match){
                return res.send(username);
            }else{
                return res.status(400).send("email or password is incorrect");
            }

        } else{
            const match = await user.checkPassword(req.body.password);
            console.log(match);
            if(match){
                return res.send(user);
            }else{
                return res.status(400).send("email or password is incorrect");
            }

        }
        
        

    }catch(e){
        return res.status(400).json({ status:"failled", message: e.message});
    }

    
}
 


