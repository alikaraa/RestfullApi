const User = require("../models/User");
const asyncErrorHandler = require("express-async-handler");
const mail = require("../helpers/nodemailer.js");


const register = asyncErrorHandler(async (req,res,next) => {
    
    const {name,email,password,role} = req.body;
    
        const token = 123456
        const user = await User.create({
            name,
            email,
            password,
            role,
            token
        });
        await mail(token);
        res.status(201).json({
            success : true,
            user
        });
        
});

const login = asyncErrorHandler(async (req,res,next) => {
    const {email,password} = req.body;
    
    //const user = await User.findOne({isActive : true})

    const user = await User.findOne({email,password});  //passwordu normalde almiyoruz ama burda almamiz gerekiyor
    
    if(!user.isActive){
       return res.status(406).json({
            message : "Please verify your email"
        })
    }
       return res.status(200).json({
            message: "Giris bassarili"
        })
})

const verify = asyncErrorHandler(async (req,res,next) => {
    let {token} = req.query

    if(token){
       const hasToken = await User.findOne({token})
       token = Number(token)
    if(token === hasToken.token){
        await User.updateOne({token}, {isActive : true})
       }
    }
});

const getAllUser = asyncErrorHandler(async (req,res,next) => {

    const users = await User.find()

    res.status(200).json({
        success: true,
        data : users
    })
})

const getDeleteUser = asyncErrorHandler(async (req,res,next) => {

    const {id} = req.params

    const user = await User.findByIdAndDelete(id)

    res.status(200).json({
        success : true,
        message : "User Basariyla silindi",
        data : user

    })
})


module.exports = {
    register,
    login,
    verify,
    getAllUser,
    getDeleteUser
}