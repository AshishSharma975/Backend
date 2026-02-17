async function name(req,res,next) {
     const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "anauthorized access.",
        })
    }

    let decoded = null;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message: "invalid token.",
        })
    }
}