const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config")

function adminmiddleware(req, res, next){
    const token = req.header.token;
    const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD);

    if(decoded){
        req.userId = decoded.id;
        next();
    }else{
        res.status(403).json({
            msg: "You are not sigin"
        })
    }

}

module.exports = {
    adminmiddleware
}