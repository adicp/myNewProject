const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    fullname: { type: String },
    position: { type: String },
    status: { type: String}
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);
