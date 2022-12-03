const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const multer = require('multer')
const fs = require('fs')
const company = require("../model/company/companySchema")
const post = require("../model/company/postSchema")
const Enquire = require("../model/user/eventEnquire")
const Quotation = require("../model/company/quotationSchema")




const companySignup = async (req, res) => {
    try {
        console.log(req.body);
        let { companyName, companyType, email, registerNo, companyAddress, phone, password } = req.body
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
        res.status(200).json({ insert: true, res: companies })

    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

const companyLogin = async (req, res) => {
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
                return res.json({ state: "ok", data: token, companies: companies })
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


const uploadPost = (req, res) => {
    console.log(req.body);
    // console.log(JSON.parse(req.body));
    console.log(req.file);

    const postSave = new post({
        companyName: req.body.companyName,
        // companyId:mongoose.Types.ObjectId(req.body.companyId),
        companyId: req.body.companyId,
        description: req.body.description,
        image: req.file.filename
        // contentType:"image/png"

    })

    postSave.save().then((response) => {
        console.log('saved');
        res.status(200).json({ posted: true })

    }).catch((err) => {
        console.log(err.message);
        res.json(err.message)
    })
    // res.send('saved')
}

const inboxView = async (req, res) => {
    try {
        // console.log(req.params.id);
        const msg = await Enquire.find({ companyId: req.params.id }).populate('userId')
        res.status(200).json(msg)
    } catch (err) {
        console.log(err.message);
        res.json(err.message)
    }
}

const acceptForm = async (req, res) => {
    try {
        const result = await Enquire.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: 'accepted' } })
        if (result) {
            res.status(200).json({ update: true })
        }

    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

const rejectFrom = async (req, res) => {
    try {
        const result = await Enquire.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: 'rejected' } })
        if (response) {
            res.status(200).json({ update: true })
        }

    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

const getCompanyProfile =async(req,res)=>{
 try {
    const result =await company.findById({ _id: req.params.id})
   res.status(200).json(result) 
 } catch (error) {
    console.log(error.message);
        res.json(error.message)
 }

}

const getProfilePost =async(req,res)=>{
    try {
        const result = await post.find({companyId: req.params.id})
        res.status(200).json(result) 
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

const quotation =async(req,res)=>{
    
    
    try {
        // console.log(req.body);
        // console.log(req.query);
        const userId = req.query.userId
        const companyId = req.query.companyId
        let { foodAmount,venueAmount,programmeAmount,lightAmount,guestAmount,cameraAmount,anchorAmount } = req.body
        const eventQuotation = await new Quotation({
            foodAmount,venueAmount,programmeAmount,lightAmount,guestAmount,cameraAmount,anchorAmount,userId,companyId
        })

        await eventQuotation.save()
        console.log('success');
        res.status(200).json({ form: 'sended' })
        
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }

}

module.exports = {
    companySignup,
    companyLogin,
    uploadPost,
    inboxView,
    acceptForm,
    rejectFrom,
    getCompanyProfile,
    getProfilePost,
    quotation
}