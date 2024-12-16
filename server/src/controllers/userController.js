const User=require("../model/user.model")

// for registring user
const userRegister=async(req,res)=>{
    const {username,email,password,role}=req.body

    try{
        const newUser=new User({username,email,password,role})
        await newUser.save()
        res.status(201).send("User Regiter Sucesfully")
    }
    catch(error){
        res.status(400).send("Error on registring user!!"+error.message)

    }

}

module.exports={userRegister}