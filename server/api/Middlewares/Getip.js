const requestIp = require('request-ip')
const User = require('../Shemas/UserShema')

function GetIP(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    if (req.userId && clientIp) {
        User.update({_id: req.userId}, {ip: clientIp}, (err) => {
            if (err) {
                console.error(err)
                next()
            }
            next()
        })
    } else {
        next()
    }
}

module.exports = GetIP