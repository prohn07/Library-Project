var {secretkey} = require("../routes/users")
var jwt = require("jsonwebtoken");


function bookMiddleware(req, res, next) {

    var token ;

    if(req.url==="/newbook"){
       
        token = req.body.token

    }else if(req.url==="/updatebook") {

        token = req.body.token

    }else{

        token = req.params.token 

    }

   

    jwt.verify(token, secretkey, (error)=>{

        if(error) {

            res.json({
                ok:false,
                result:"failed to match token"
            })

        }else{
            next();
        }

    })

}

module.exports = bookMiddleware;