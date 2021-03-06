/* eslint-disable linebreak-style */

const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
//const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const session = require('express-session');

const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes');
const usersRoutes = require('./routes/users.routes');

const app = express();

// passport.use(new GoogleStrategy({
//   clientID: process.env.clientID,
//   clientSecret: process.env.clientSecret,
//   callbackURL: process.env.callbackURL,
// }, (accessToken, refreshToken, profile, done) => {
//   done(null, profile);
// }));

// app.use(session({ secret: 'anything' }));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser((user, serialize) => {
//   serialize(null, user);
// });

// passport.deserializeUser((obj, deserialize) => {
//   deserialize(null, obj);
// });


/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);
app.use('/api', usersRoutes);

// app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('/logged');
//   }
// );

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ products: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/beerGlasses', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
