const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
    companyName:String,
    companyId:mongoose.Types.ObjectId,
    description:String,
    image:String,
    status:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:Date.now
    }

    
})

const post = mongoose.model('post',postSchema)
module.exports= post