const { connect, connection } = require('mongoose');
require('dotenv').config();

const connectionString = process.env.uri || 'mongodb://127.0.0.1:27017/WBGTTI';

connect(connectionString);

module.exports = connection;