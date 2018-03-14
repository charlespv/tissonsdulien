// dependencies
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const md5 = require('md5')
const config = require('../config')

// shemas
const User = require('../Shemas/UserShema')

// middlewares
const VerifyToken = require('../Middlewares/VerifyToken')
const Getip = require('../Middlewares/Getip')
const LastLogin = require('../Middlewares/LastLogin')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())


// REGISTER NEW USER
router.post('/register', Getip, (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 6)
    if (validator.isEmail(req.body.email)) {
        if (req.body.password.length >= 8) {
            User.findOne({ email: req.body.email }, (err, user) => {
                if (err) return res.status(200).send({success: false, auth: false, errmsg: `Erreur. Veuillez re essayer plus tard.`})
                if (user) {
                    return res.status(200).send({success: false, auth: false, errmsg: `Cet utilisateur existe déjà.`})
                } else {
                    User.create(
                        {
                            ip: req.userIP,
                            email: req.body.email,
                            password: hashedPassword
                        },
                        (err, user) => {
                            if (err) return res.status(200).send({ success: false, auth: false, errmsg: `Erreur. Veuillez re essayer plus tard.`})
                            let token = jwt.sign({ id: user._id }, config.secret, {
                                expiresIn: config.jwtExpiration,
                            })
                            let sessData = {
                                auth: true,
                                token: token,
                                userid: user._id
                            }
                            res.status(200).send({success: true, auth: true, data: sessData})
                        }
                    )
                }
            })
        } else {
            return res.status(200).send({ success: false, auth: false, errmsg: `Votre mot de passe doit faire au moins 8 caractères.`})
        }
    } else {
        return res.status(200).send({ success: false, auth: false, errmsg: `Informations incorrectes.`})
    }
})

// LOGIN USER
router.post('/login', Getip, LastLogin, (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(200).send({success: false, auth: false, errmsg: `Erreur. Veuillez re essayer plus tard.`})
        if (!user) return res.status(200).send({success: false, auth: false, errmsg: `Cet utilisateur n'existe pas`})

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

        if (!passwordIsValid) return res.status(200).send({success: false, auth: false, errmsg: `Utilisateur ou mot de passe invalide.`})
        let token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: config.jwtExpiration,
        })
        let sessData = {
            auth: true,
            token: token,
            userid: user._id,
        }
        if (user.verified) {
            res.status(200).send({success: true, data: sessData})
        } else {
            res.status(200).send({success: false, auth: false, errmsg: 'Veuillez vérifier votre addresse email.', data: {id: user._id}})
        }
    })
})

// RETURNS SIGNED IN USER IN THE DATABASE
router.get('/', VerifyToken, Getip, (req, res) => {
    User.findById(req.userId, { password: 0, ip: 0 }, (err, user) => {
        if (err) return res.status(200).send({success: false, auth: true, errmsg: 'Erreur. Veuillez re essayer plus tard.'})
        if (!user) return res.status(200).send({success: false, auth: false, errmsg: `Vous n'êtes pas connecté.`})
        res.status(200).send({auth: true, success: true, data: user})
    })
})

module.exports = router
