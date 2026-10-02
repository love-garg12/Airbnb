import jwt from "jsonwebtoken";
const isAuth = (req, res, next) => {
    const { token } = req.cookies ?? {};
    if (!token) {
        return res.status(401).json({ message: "User is not authenticated" });
    }

    try {
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (typeof verifyToken === "string" || !verifyToken.id) {
            return res.status(401).json({ message: "User does not have a valid token" });
        }

        req.userId = verifyToken.id;
        return next();
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ message: "User does not have a valid token" });
        }
        return res.status(500).json({ message: `Internal Server Error in isAuth middleware: ${err.message}` });
    }
}

export default isAuth;