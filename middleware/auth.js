const jwt = require("jsonwebtoken");

const hometoken = (req, res, next) => {
    try {
        const header = req.headers.authorization;

        if (!header) {
            return res.status(401).json({
                message: "Access denied. No token provided.",
                success: false
            });
        }

        // Check strict "Bearer <token>" format
        const [type, token] = header.split(" ");

        if (type !== "Bearer" || !token) {
            return res.status(401).json({
                message: "Invalid token format. Use 'Bearer <token>'",
                success: false
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();

    } catch (error) {
        console.log("TOKEN ERROR:", error);
        return res.status(401).json({
            message: "Invalid or expired token",
            success: false
        });
    }
};

module.exports = hometoken;