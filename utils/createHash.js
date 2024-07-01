const crypto = require('crypto');

const hashString = (string) => crypto.createHash('md4').update(string).digest('hex');

module.exports = hashString;