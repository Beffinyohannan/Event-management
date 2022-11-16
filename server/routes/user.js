const { login, signup, viewCompanies } = require('../controller/userController')

const router = require('express').Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/view-companies',viewCompanies)

module.exports= router