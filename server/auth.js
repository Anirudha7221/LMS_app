const JWT = require('jsonwebtoken');

module.exports = function(req, res , next){
    const token = req.header('Authorization');
}