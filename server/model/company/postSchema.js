const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
    name:String,
    image:String
    // {
    //     data:String,
    //     description:String,
    //     contentType:String
    // }
})

const post = mongoose.model('post',postSchema)
module.exports= post