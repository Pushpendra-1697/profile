const mongoose = require('mongoose');
require('dotenv').config();
const connect = async () => {
    mongoose.connect(process.env.mongo_url);
};
module.exports = connect;