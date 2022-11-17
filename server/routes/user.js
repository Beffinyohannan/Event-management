const { login, signup, viewCompanies, viewPosts } = require('../controller/userController')

const router = require('express').Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/view-companies',viewCompanies)
router.get('/viewPosts',viewPosts)

module.exports= router