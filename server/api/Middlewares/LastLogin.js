const User = require('../Shemas/UserShema')

function LastLogin(req, res, next) {
    if (req.userId) {
        User.update({_id: req.userId}, {lastLogin: new Date()}, (err) => {
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

module.exports = LastLogin