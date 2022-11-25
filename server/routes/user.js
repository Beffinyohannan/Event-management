const { login, signup, viewCompanies, viewPosts, likePost, commentPost, uncommentPost, viewComments } = require('../controller/userController')

const router = require('express').Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/view-companies',viewCompanies)
router.get('/viewPosts',viewPosts)
router.put('/post/like/:id',likePost)

router.put('/post/comment/:id',commentPost)
router.put('/post/uncomment/:id',uncommentPost)
router.get('/post/viewcomments/:id',viewComments)

module.exports= router