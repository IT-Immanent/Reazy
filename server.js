require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const passport = require('passport');
// const cookieSession = require('cookie-session');
const { connectDB } = require("./db");


// Server configuration..
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(cookieSession({
//   name: 'google-auth-session',
//   keys: ['key1', 'key2']
// }))
// app.use(passport.initialize());
// app.use(passport.session());


//   Defining API's
app.use('/api', require("./Routes/userRoutes"));

// Connecting with Database
connectDB();

// tracking listner
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listning port localhost : ${port}`);
})