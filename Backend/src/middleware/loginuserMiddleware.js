var userModel = require("../model/usermodel")

async function loginuserMiddleware(req, res, next) {

    var data = req.body;

    var output = await userModel.find(data);

    if(output.length>0) {

       next();

    }else {

      res.send({

             ok:false,
             result:"Please enter correct credentials"
    })
    
    }


};

module.exports =  loginuserMiddleware;