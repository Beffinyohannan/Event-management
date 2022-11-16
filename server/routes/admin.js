const { AdminLogin, users, blockUser, unblockUser, Companies, blockCompany, unblockCompany } = require('../controller/adminController')

const router = require('express').Router()

router.post('/login',AdminLogin)
router.get('/users',users)
router.post('/block-user/:id',blockUser)
router.post('/unblock-user/:id',unblockUser)

router.get('/companies',Companies)
router.post('/block-company/:id',blockCompany)
router.post('/unblock-company/:id',unblockCompany)

module.exports= router