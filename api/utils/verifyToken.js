const jsonwebtoken = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jsonwebtoken.verify(token, "my secret key", (err, payload) => {
            if (err) {
                return res.status(403).json("Token not valid")
            }
            req.user = payload;
            next();
        })
    }
    else {
        return res.status(403).json("You are not authenticated.");
    }
}

module.exports = verifyToken