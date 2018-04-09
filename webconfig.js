const packageJson = require('./package.json');

module.exports = {
    myApi: {
        name: packageJson.name,
        url: 'http://localhost',
        port: process.env.PORT || 8050,
        version: packageJson.version
    }
};