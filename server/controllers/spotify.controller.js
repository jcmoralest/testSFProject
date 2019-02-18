const SpotifyWebApi = require('spotify-web-api-node');

const credentials = {
    clientId: '774100ec5f27433d9ac92077afa86ebe',
    clientSecret: '22e778e93a014f39905fb0472bef2449',
    //Authorization: 'Bearer BQDGqCRpqwYzXoIamUkYGBdeXWtEc-p6Di_YQga3YLZ22M8_zkJdp7LqCMfqbOHI8rjxBo3ykmugm5VqLo1ylyGj-fFUORMdDNk_1MyAW7NkKVZEtb-1_SZkXCigLp6ojrCIFXnFF6UnlSYzFSpdY0DVfk26ZguH4qIYqqkFwOk'
};

const spotifyController = {};
const spotifyApi = new SpotifyWebApi(credentials);

spotifyController.getMe = async() => {
    console.log("Entro");

    // await spotifyController.getToken();
    await spotifyApi.getUser('eewsa')
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