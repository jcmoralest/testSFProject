const mongoose = require('mongoose');
const { Schema } = mongoose;

const queryAlbumSchema = new Schema({
    nameAlbum: { type: String, required: true },
    Artist: { type: String, required: true }
});

module.exports = mongoose.model('album', queryAlbumSchema);