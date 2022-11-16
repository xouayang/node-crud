const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./Routes/index");
const ConnectDB = require("./config/ConnectDB");
const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.URL;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "20mb" }));
ConnectDB();
const port = process.env.PORTS
app.listen((port) , () => {
    console.log(`Server running on port ${port}`)
})

// startServer =  ()  => {

//     app.use(cors());
//     ConnectDB();
//     app.use(express.json());
//     app.use(morgan('dev'));
//     app.use(bodyParser.json({ limit: '20mb' }));
//     app.use('/api',router);

//     app.listen(process.env.PORT, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//     })
// }

// startServer();
