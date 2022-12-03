const { companySignup, companyLogin, uploadPost, inboxView, acceptForm, rejectFrom, getCompanyProfile, getProfilePost, quotation } = require('../controller/companyController')
const multer = require('../helper/multer')

const router = require('express').Router()
var type = multer.single('image');

router.post('/signup',companySignup)
router.post('/login',companyLogin)
router.post('/post-upload',type,uploadPost)

router.get('/inbox/:id',inboxView)
router.put('/accept-form/:id',acceptForm)
router.put('/reject-form/:id',rejectFrom)
router.get('/profile/:id',getCompanyProfile)
router.get('/profile-post/:id',getProfilePost)
router.post('/eventQuotation',quotation)


module.exports= router 