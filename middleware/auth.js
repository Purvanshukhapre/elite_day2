const jwt = require("jsonwebtoken");

const hometoken = (req, res, next) => {
    try {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(401).json({ 
                message: "Access denied. No token provided.",
                success: false 
            });
        }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Invalid or expired token",
            success: false
        });
    }
};

module.exports = hometoken;