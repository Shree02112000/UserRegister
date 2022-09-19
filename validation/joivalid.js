const Joi = require('joi');

//signup validation
const validUser = Joi.object({
    name:Joi.string().required().min(3).max(20),
    email:Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase(),
    phone:Joi.number().required().min(100000000).max(999999999),
    password:Joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$')).required(),
    status: Joi.boolean().default(true),
})

const userSignUp = async(req, res, next) => {
    try {
        await validUser.validateAsync({...req.body }, { abortEarly: false })
        next()
    } catch (err) {
        err.status = res.status(400).json({ status: 400, message: err.message || err })
    }
}

//signinvalidation
const loginUser = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase().required(),
    password:Joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$')).required()
})

const usersignin = async(req, res, next) => {
    try {
        await loginUser.validateAsync({...req.body }, { abortEarly: false })
        next()
    } catch (err) {
        err.status = res.status(400).json({ status: 400, message: err.message || err })
    }
}
module.exports={userSignUp,usersignin}
