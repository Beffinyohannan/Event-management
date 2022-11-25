const User = require('../model/user/loginSchema');
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const company = require('../model/company/companySchema');
const post = require('../model/company/postSchema');


/* ------------------------------- user signup ------------------------------ */

const signup = async (req, res) => {
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

/* ------------------------------- user login ------------------------------- */

const login = async (req, res) => {
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
                return res.json({ state: "ok", data: token, user: user })
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

/* ----------------------------- view companies ----------------------------- */

const viewCompanies = (req, res) => {
    company.find({ status: "Active" }).then((data) => {
        // console.log(data);
        res.json(data)
    }).catch((error) => {
        console.log(error.message);
        res.json(error.message)
    })
}

/* ------------------------- view post of companies ------------------------- */

const viewPosts = (req, res) => {
    post.find({ status: true }).sort({ date: -1 }).then((data) => {
        // console.log(data);

        res.json(data)
    }).catch((err) => {
        console.log(err.message);
        res.json(err.message)
    })
}

/* ------------------------------ like the post ----------------------------- */

const likePost = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body.userId);
    const userId = req.body.userId


    try {
        const posts = await post.findById(req.params.id)
        console.log(posts, 'kkkkkk');

        if (!posts.likes.includes(userId)) {
            // if(posts.likes.length == 0){
            //     await post.updateOne({},{$set:{likes:userId}})
            //     console.log('qwerty');
            // }
            await post.updateOne({ _id: req.params.id }, { $push: { likes: userId } })

            console.log('post likes');
            res.status(200).json({ message: 'post Liked' })

        } else {
            await post.updateOne({ _id: req.params.id }, { $pull: { likes: userId } })
            console.log('post dislike');
            res.status(200).json({ message: 'post disliked!' })
        }
    } catch (err) {
        console.log(err.message);
        res.json(err.message)
    }
}

const commentPost = async (req, res) => {
    console.log(req.body);
    const comment ={
        comment:req.body.comment,
        postedBy :req.body.postBy,
        name:req.body.username
    } 
    //    const cmt = req.body 
    try {
        const data = await post.findByIdAndUpdate({ _id: req.params.id },
            { $push: { comments: comment } }
        )

        if (data) {
            console.log('qwertyuiop');
            res.status(200).json({ commeted: true })
        }
    } catch (err) {
        console.log(err.message);
        res.json(err.message)
    }
}

const uncommentPost = (req, res)=>{

}

const viewComments=async(req,res)=>{
    try {
      const comment =await post.find({_id:req.params.id})
      res.status(200).json(comment)
    } catch (err) {
        console.log(err.message);
        res.json(err.message)
    }
}

module.exports = {
    signup,
    login,
    viewCompanies,
    viewPosts,
    likePost,
    commentPost,
    uncommentPost,
    viewComments
}