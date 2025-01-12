const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "lyUzkT4Q#dNv62829zcIYG4YkXKdyGhqcF2LPpcc6O2Qrrx9JgvQ",
};
