
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// var cors = require('cors');
//import routes
const listenRoutes = require("./routs/listing");
const userRouter = require("./routs/user");

const cors = require('cors');

app.use(cors({
     origin: ['http://localhost:4200'],
     "methods": "GET,PUT,POST,DELETE",
     "preflightContinue": false,
     "optionsSuccessStatus": 204,
     credentials: true
 }));

 
dotenv.config();
// connect to DB
mongoose.connect(
    process.env.DB_CONNECT)
    .then(console.log("connect to db"))
    .catch(error=>console.log(error));


// middelware
app.use(express.json())


//route middelware
app.use("/api/listings", listenRoutes);
app.use("/api/user", userRouter);
// app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

// });
           
app.listen(4000, ()=> console.log('Hello World, on port 4000!'));