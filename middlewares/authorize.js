const authorize = (req, res, next) =>{
    if(req.headers.authorization !== process.env.ROUTE_PASSWORD){
      return  res.sendStatus(401);
    }
    next();
}

module.exports = authorize;