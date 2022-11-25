const mongoose = require('mongoose')
// const User = require('../user/loginSchema');
const Company = require('../company/companySchema')



const postSchema = mongoose.Schema({
    companyName:String,
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        // ref:Company
    },
    description:String,
    image:String,
    status:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    likes:{
        type:Array,
        default:[]
    },
    comments:[
        {
            comment:{
                type:String
            },
            created:{
                type:Date,
                default:Date.now
            },
            postedBy:{
                type:String,
            },
            name:{
                type:String
            }

        }
    ]

    
})

const post = mongoose.model('post',postSchema)
module.exports= post