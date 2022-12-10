const User = require('../model/user/loginSchema');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const company = require('../model/company/companySchema');
const post = require('../model/company/postSchema');
const Enquire = require('../model/user/eventEnquire')
const Quotation = require('../model/company/quotationSchema')


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
    console.log(req.params.id);
    post.find({'reports.reportedBy':{$ne:req.params.id},status:true} ).sort({ date: -1 }).then((data) => {
        console.log(data,'++++++++++++++');

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

/* ---------------------------- comment the post ---------------------------- */

const commentPost = async (req, res) => {
    console.log(req.body);
    const comment = {
        comment: req.body.comment,
        postedBy: req.body.postBy,
        name: req.body.username
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

/* --------------------------- uncomment the post --------------------------- */

const uncommentPost = (req, res) => {

}

/* ---------------------------- view comment post --------------------------- */

const viewComments = async (req, res) => {
    try {
        const comment = await post.find({ _id: req.params.id })
        res.status(200).json(comment)
    } catch (err) {
        console.log(err.message);
        res.json(err.message)
    }
}

/* --------------------------- follow and unfollow -------------------------- */

const follow = async (req, res) => {
    try {
        console.log(req.params.id, '11111');
        console.log(req.body.id, '222222');
        const user = await User.findById({ _id: req.params.id })
        const userToFollow = await company.findById({ _id: req.body.id })
        console.log(user, '33333333');
        console.log(userToFollow, '444444');
        if (!user.following.includes(req.body.id)) {
            console.log('iffffffffffff');
            await user.updateOne({ $push: { following: req.body.id } });
            await userToFollow.updateOne({ $push: { followers: req.params.id } })
            res.status(200).json('Followed')
        } else if (user.following.includes(req.body.id)) {
            console.log('elseiffffffff');
            await user.updateOne({ $pull: { following: req.body.id } });
            await userToFollow.updateOne({ $pull: { followers: req.params.id } })
            res.status(200).json('Unfollowed')
        } else {
            res.status(403).json('You already follows this user')
        }
    } catch (err) {
        console.log(err.message);
        res.json(err.message)
    }
}

/* ---------------------------- get user profile ---------------------------- */

const getProfile = async (req, res) => {
    const user = await User.findById({ _id: req.params.id })
    res.status(200).json(user)
}

/* ------------------------ add enquire for the event ----------------------- */

const eventEnquire = async (req, res) => {
    try {
        console.log(req.query);
        console.log(req.body);
       
        const companyId = req.body.com
        console.log(companyId,'///////////////');
        
       
        let { name, email, phone,eventDate,guestNumber,budget,eventType,address,food,venue,programme,light,guest,camera,anchor,other,notes } = req.body
        const userId = req.query.userId
        // const companyId = req.query.companyId
        const eventEnquire = await new Enquire({
            name, email, phone,eventDate,guestNumber,budget,eventType,address,food,venue,programme,light,guest,camera,anchor,other,notes,userId,companyId
        })
        await eventEnquire.save()
        console.log('success');
        res.status(200).json({ form: 'sended' })
    } catch (err) {
        console.log(err.message);
        res.json(err.message)
    }
}

/* -------------------------- view enquiry in inbox ------------------------- */

const inboxView=async(req,res)=>{
    try {
       const msg= await Enquire.find({userId:req.params.id}).populate('companyId')
       res.status(200).json(msg)
    } catch (err) {
        console.log(err.message);
        res.json(err.message) 
    }
}

/* ------------------------- cancel enquiry in inbox ------------------------ */

const cancelEnquiry =async(req,res)=>{
    try {
        const result = await Enquire.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: 'cancelled' } })
        if (result) {
            res.status(200).json({ update: true })
        }

    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

/* ---------------------------- get user details ---------------------------- */

const getUserDetail =async(req,res)=>{
    try {
        const id = req.params.id
        const user = await User.findOne({_id:id})
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

/* ----------------------- get quotation from database ---------------------- */

const getQuotation = async(req,res)=>{
    try {
        const id = req.params.id
        const quotation = await Quotation.find({userId:id}).populate('companyId')
        res.status(200).json(quotation)
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

/* ---------------------------- approve quotation --------------------------- */

const approveQutations = async(req,res)=>{
    try {
        const result = await Quotation.findByIdAndUpdate({ _id: req.params.id },{ $set: { status: 'accepted' } })
        if (result) {
            res.status(200).json({ update: true })
        }
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

/* ---------------------------- reject quotations --------------------------- */

const rejectQutations =async(req,res)=>{
    try {
        const result = await Quotation.findByIdAndUpdate({ _id: req.params.id },{ $set: { status: 'rejected' } })
        if (result) {
            res.status(200).json({ update: true })
        }
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    } 
}

/* ----------------------------- report an post ----------------------------- */

const reportPost =async(req,res)=>{
    try {
        console.log(req.body);
        const report ={
            reason:req.body.reason,
            reportedBy:req.body.userId
        }
       const result = await post.findByIdAndUpdate({_id:req.params.id},
        {$push:{reports:report}}) 
        if (result) {
            console.log('qwertyuiop');
            res.status(200).json({ report: true })
        }
    } catch (error) {
        res.json(error.message)
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
    viewComments,
    follow,
    getProfile,
    eventEnquire,
    inboxView,
    cancelEnquiry,
    getUserDetail,
    getQuotation,
    approveQutations,
    rejectQutations,
    reportPost

}