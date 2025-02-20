const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const user = require("../routes/user");

function usermiddleware(req, res, next){
    const token = req.header.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if(decoded){
        req.userId = req.id;
        next();
    }else{
        res.status(403).json({
            msg: "You are not sigin",
        })
    }
}

module.exports = {
    usermiddleware
}