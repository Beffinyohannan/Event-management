const { companySignup, companyLogin, uploadPost } = require('../controller/companyController')
const multer = require('../helper/multer')

const router = require('express').Router()

router.post('/signup',companySignup)
router.post('/login',companyLogin)
var type = multer.single('image');
router.post('/post-upload',type,uploadPost)


module.exports= router 