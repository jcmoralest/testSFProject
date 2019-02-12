const express = require("express");
const morgan = require("morgan");

const app = express();

const { mongoose } = require("./database");

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/serviceSpotify', require('./routes/spotify.routes'));

//Starting the serve
app.listen(app.get('port'), () => {
    console.log('Serve on port ', app.get('port'));
});