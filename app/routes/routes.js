var express = require('express'),
    router  = new express.Router();

// Require controllers.
var UsersCtrl  = require('../controllers/users'),
    MusicsCtrl = require('../controllers/musics'),
    AuthsCtrl  = require('../controllers/auths');
    // SongsCtrl  = require('../controllers/songs');


// users resource paths:

router.post('/login',    AuthsCtrl.userAuth);
router.get('/users',     UsersCtrl.usersAll);
router.post('/users',    UsersCtrl.userCreate);
// router.get('/users/:id', UsersCtrl.userShow);

router.get('/musics', MusicsCtrl.getRandomTrack);

module.exports = router;
