const mongoose = require('mongoose')
const User = require('../user/loginSchema')
const company = require('./companySchema')

const QuotaionSchema= mongoose.Schema({
    foodAmount:String,
    venueAmount:String,
    programmeAmount:String,
    lightAmount:String,
    guestAmount:String,
    cameraAmount:String,
    anchorAmount:String,
    companyId:{
        type:String,
        ref:company
    } ,
    userId:{
        type:String,
        ref:User
    }
})


const Quotation = mongoose.model('eventQuotation',QuotaionSchema)
module.exports = Quotation