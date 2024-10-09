const JWT = require('jsonwebtoken');

const auth = (req, res, next)=>{
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({msg : 'No token found, authorization denied'});
    }

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.user =decoded.user;
        next();
    } catch (error) {
        res.status(404).json("Token is not valid");
    }
}

module.exports =auth;
