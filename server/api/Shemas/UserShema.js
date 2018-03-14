const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  ip: String,
  name: String,
  email: String,
  password: String,
  lastLogin: { type: Date, default: Date.now},
  createdAt: { type: Date, default: Date.now },
  addresses: {
      street: String,
      city: String,
      zip: Number
  },
  geoloc: {
    "max_radius": Number,
    "current_position": {
        "timestamp": Number,
        "coords": {
            "accuracy": Float32Array,
            "altitude": Float32Array,
            "altitudeAccuracy": Float32Array,
            "heading": Float32Array,
            "latitude": Float32Array,
            "longitude": Float32Array,
            "speed": Float32Array
        }
    }
  }
})

mongoose.model('User', UserSchema)
module.exports = mongoose.model('User')