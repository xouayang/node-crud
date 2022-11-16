const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.URL;
const ConnectDB = () => {
  try {
    mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
        console.log('Success')
    }).catch((error) => {
        console.log(`can not conect database ${error}`)
    })
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDB;
