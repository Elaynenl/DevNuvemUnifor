const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;


const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido' });
    }

    try {
        
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
        next(); 
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};
module.exports = isAuthenticated;
