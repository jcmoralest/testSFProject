const Album = require('../models/album');

const albumController = {};

albumController.getAlbums = async(req, res) => {
    const albums = await Album.find();
    res.json(albums);

}

albumController.setAlbum = async(req, res) => {
    const album = new Album(req.body);
    await album.save();
    console.log(album);
    res.json({
        'status': 'Album saved'
    });
}

albumController.getAlbum = async(rec, res) => {
    console(req.params.id)
    const album = await Album.findById(req.params.id);
    res.json(album);
}


albumController.editAlbum = async(rec, res) => {
    const { id } = req.params;
    const Album = {
        nameAlbum: req.body.nameAlbum,
        Artist: req.body.Artist
    };
    await lbum.findByIdAndUpdate(id, { $set: Album }, { new: true });
    res.json({ status: 'Album Updated' });
}


module.exports = albumController;