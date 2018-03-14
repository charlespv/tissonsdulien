const jwt = require('jsonwebtoken')
const config = require('../config')

function verifyToken(req, res, next) {
    let token = req.headers['x-access-token'] || req.body.headers['x-access-token']
    
    if (!token) return res.status(200).send({success: false, auth: false, message: 'No token provided.' })
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) return res.status(200).send({success: false, auth: false, errmsg: 'Unable to verify identity.'})
        
        let dateNow = new Date();
        if (decoded.exp < dateNow.getTime()) {
            req.userId = decoded.id
            req.token = token
            next()
        } else {
            return res.status(200).send({success: false, auth: false, errmsg: 'Session expired.'})
        }
    })
}

module.exports = verifyToken