const User = require('../model/user/loginSchema');
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const company = require('../model/company/companySchema');
const post = require('../model/company/postSchema');



const signup =async(req,res)=>{
    try {
       console.log(req.body);
       let { username, email, phone, password } = req.body
        password = await bcrypt.hash(password, 10)

        const user = await new User({
            username,
            email,
            phone,
            password
        })
        await user.save()
        res.status(200).json({ res: user })
       
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

const login =async(req,res)=>{
    try {
       console.log(req.body);
       const { email, password } = req.body;
       const user = await User.findOne({ email });
       // console.log(password);
       console.log(user);
       if (!user) {
          
           return res.json({ error: "User not found" })
       }

       const auth = await bcrypt.compare(password, user.password);
       console.log(auth, "klklk");
       if (auth) {
           console.log("entered");
           const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
           console.log(token);
           if (res.status(201)) {
               console.log('hai');
               return res.json({ state: "ok", data: token,user:user })
           } else {
               console.log('hello');
               return res.json({ error: "error" });
           }
       }
       return res.json({ status: "error", error: "Invalid Password" })
       
    } catch (error) {
        console.log(error.message);
    }
}

const viewCompanies=(req,res)=>{
    company.find({status:"Active"}).then((data) => {
        console.log(data);
        res.json(data)
    }).catch((error) => {
        console.log(error.message);
        res.json(error.message)
    })
}

const viewPosts=(req,res)=>{
    post.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err.message);
        res.json(err.message)
    })
}

module.exports={
    signup,
    login,
    viewCompanies,
    viewPosts
}