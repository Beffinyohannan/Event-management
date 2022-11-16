const jwt = require("jsonwebtoken");
const { response } = require("../app");
const company = require("../model/company/companySchema");
const User = require("../model/user/loginSchema");

const admin = {
    adminEmail: 'admin@gmail.com',
    adminPassword: 12345
}

const AdminLogin = async (req, res) => {

    const { email, password } = req.body;

    if (email == admin.adminEmail && password == admin.adminPassword) {
        console.log("entered");
        const token = jwt.sign({ email: admin.adminEmail }, process.env.JWT_SECRET)
        console.log(token);
        if (res.status(201)) {
            console.log('hai');
            return res.json({ state: "ok", data: token })
        } else {
            console.log('hello');
            return res.json({ error: "error" });
        }
    }
    return res.json({ status: "error", error: "Invalid Password" })
}


const users = (req, res) => {
    User.find().then((data) => {
        console.log(data);
        res.json(data)
    }).catch((error) => {
        console.log(error.message);
        res.json(error.message)
    })
}

const blockUser = (req, res) => {
    try {
        User.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: "Blocked" } }).then((response) => {
            if (response) {
                res.status(200).json({ update: true })
            }
        }).catch((error) => {
            res.json(error.message)
        })
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

const unblockUser=(req,res)=>{
    try {
        User.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: "Active" } }).then((response) => {
            if (response) {
                res.status(200).json({ update: true })
            }
        }).catch((error) => {
            res.json(error.message)
        })
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

 const Companies=(req,res)=>{
    company.find().then((data) => {
        console.log(data);
        res.json(data)
    }).catch((error) => {
        console.log(error.message);
        res.json(error.message)
    })
 }

 const blockCompany=(req,res)=>{
    try {
        company.findByIdAndUpdate({_id:req.params.id},{$set:{status:"Blocked"}}).then((response)=>{
            if (response) {
                res.status(200).json({ update: true })
            }
        }).catch((error) => {
            res.json(error.message)
        })
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
 }

const unblockCompany=(req,res)=>{
    try {
        company.findByIdAndUpdate({_id:req.params.id},{$set:{status:"Active"}}).then((response)=>{
            if (response) {
                res.status(200).json({ update: true })
            }
        }).catch((error) => {
            res.json(error.message)
        })
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
 }

module.exports = {
    AdminLogin,
     users,
     blockUser,
     unblockUser,
     Companies,
     blockCompany,
     unblockCompany
}