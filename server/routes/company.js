const { companySignup, companyLogin, uploadPost } = require('../controller/companyController')
const multer = require('../helper/multer')

const router = require('express').Router()

router.post('/signup',companySignup)
router.post('/login',companyLogin)
router.post('/post-upload',multer.single('image'),uploadPost)


module.exports= router 