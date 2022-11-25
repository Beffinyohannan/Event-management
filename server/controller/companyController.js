const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const multer = require('multer')
const fs =require('fs')
const company = require("../model/company/companySchema")
const post = require("../model/company/postSchema")



const companySignup =async(req,res)=>{
    try {
       console.log(req.body);
       let { companyName,companyType, email,registerNo,companyAddress, phone, password } = req.body
        password = await bcrypt.hash(password, 10)

        const companies = await new company({
            companyName,
            companyType,
            email,
            registerNo,
            phone,
            companyAddress,
            password
        })
        await companies.save()
        res.status(200).json({ insert:true, res: companies })
       
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

const companyLogin=async(req,res)=>{
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const companies = await company.findOne({ email });
        // console.log(password);
        console.log(companies);
        if (!companies) {
           
            return res.json({ error: "User not found" })
        }
 
        const auth = await bcrypt.compare(password, companies.password);
        console.log(auth, "klklk");
        if (auth) {
            console.log("entered");
            const token = jwt.sign({ email: companies.email }, process.env.JWT_SECRET)
            console.log(token);
            if (res.status(201)) {
                console.log('hai');
                return res.json({ state: "ok", data: token,companies:companies })
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


const uploadPost=(req,res)=>{
    console.log(req.body);
    // console.log(JSON.parse(req.body));
    console.log(req.file);
  
    const postSave= new post({
        companyName:req.body.companyName,
        // companyId:mongoose.Types.ObjectId(req.body.companyId),
        companyId:req.body.companyId,
        description:req.body.description,
        image:req.file.filename
            // contentType:"image/png"
        
    }) 

    postSave.save().then((response)=>{
        console.log('saved');
        res.status(200).json({posted:true})
        
    }).catch((err)=>{
        console.log(err.message);
        res.json(err.message)
    })
    // res.send('saved')
}


module.exports={
    companySignup,
    companyLogin,
    uploadPost
}