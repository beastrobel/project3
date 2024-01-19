const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'monogodb://127.0.0.1:27017/WBGTTI');

module.exports = mongoose.connection;