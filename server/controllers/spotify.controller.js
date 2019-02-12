const SpotifyWebApi = require('spotify-web-api-node');

const credentials = {
    clientId: 'ffe46cf985e44439b9a1c7f6a36925c7',
    clientSecret: '3ccf57ead98141f9bff3aceec3452634',
    Authorization: 'Bearer BQDGqCRpqwYzXoIamUkYGBdeXWtEc-p6Di_YQga3YLZ22M8_zkJdp7LqCMfqbOHI8rjxBo3ykmugm5VqLo1ylyGj-fFUORMdDNk_1MyAW7NkKVZEtb-1_SZkXCigLp6ojrCIFXnFF6UnlSYzFSpdY0DVfk26ZguH4qIYqqkFwOk'
};

const spotifyController = {};
const spotifyApi = new SpotifyWebApi(credentials);

// spotifyController.getUser = (req) => {
//     let resp = await spotifyApi.getUser(req.params.query);
//     console.log(resp);
//     res.json(resp.body);
// };

spotifyController.getMe = async() => {
    await spotifyController.getToken();
    spotifyApi.getUser('eewsa')
        .then(function(data) {
            console.log('Some information about this user', data.body);
        }, function(err) {
            console.log('Algo pasó en el Getme', err);
        })
};

spotifyController.getToken = async() => {

    spotifyApi.authorizationCodeGrant(code).then(
        function(data) {
            console.log('The token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            console.log('The refresh token is ' + data.body['refresh_token']);

            // Set the access token on the API object to use it in later calls
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);
        },
        function(err) {
            console.log('Algo pasó renovando el token :(', err);
        }
    );
}

module.exports = spotifyController;