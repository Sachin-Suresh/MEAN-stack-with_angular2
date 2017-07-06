const crypto = require('crypto').randomBytes(256).toString('hex') ;


module.exports = {
    uri: 'mongodb://10.22.1.168:27017/' + this.db,
    secret: 'crypto' ,
    db: 'canteen-app'
}