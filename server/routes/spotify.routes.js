const express = require("express");
const router = express.Router();

const albumController = require("../controllers/album.controller");
const spotifyController = require("../controllers/spotify.controller");

router.get('/', spotifyController.getMe);

// router.get('/', albumController.getAlbums);
// router.get('/:id', albumController.getAlbum);
// router.post('/', albumController.setAlbum);
// router.put('/:id', albumController.editAlbum);

module.exports = router;