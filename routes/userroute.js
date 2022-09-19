const Validate = require('../validation/joivalid')
const express = require('express')
const router = express.Router()
const controller = require('../controller/user')

router.post('/register', Validate.userSignUp,controller.register)
router.post('/login', Validate.usersignin, controller.login)
router.get('/getUserDetail', controller.getUser)

module.exports = router