const mongoose = require("mongoose");
const MOGODB_URI = "mongodb+srv://huevang:hueavangxp@cluster0.mpjkgcf.mongodb.net/?retryWrites=true&w=majority";

const ConnectDB = async () => {
    try {
        await mongoose.connect(
            MOGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            (error) => {
                if (error) return console.log("Can't connect to database");
                console.log("Connected to database");
            }
        )
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDB;
 