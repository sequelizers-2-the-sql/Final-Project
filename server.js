const express = require("express");
//IB for sessions
const bodyParser = require('body-parser')
const session = require('express-session')
const Model = require('./models')
let dbConnection =  Model.mongoose
const MongoStore = require('connect-mongo')(session)
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

const routes = require('./routes')
//IB adding for passport
const passport = require('passport');

// MIDDLEWARE
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sessions --> creates an empty session object, as req.session
// saves the session object to the database
app.use(
	session({
		secret: 'struggling-ninja', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);

// IB to pass the passport middleware
app.use(passport.initialize());
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use(routes);
app.get("/api/bla/:artist", (req, res) => {
	axios.get("https://www.bandsintown.com/" + req.params.artist)
		.then(({ data }) => res.send(data));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
