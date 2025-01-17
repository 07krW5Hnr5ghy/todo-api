const jwt = require('jsonwebtoken');

const authenticate = (req,res,next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }

    try{
        const decoded = jwt.verify(token.slice(7,token.length),process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({message:'Invalid token'});
    }
}

module.exports = authenticate;