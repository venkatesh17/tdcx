const Register = require(appPath + '/models/myapp')

module.exports = async(req, res)=>{
    let response = {
        success: false,
        message: undefined,
        data: ""
    }

    let register = new Register()
    try {
        let result = await register.registration(req.body);
             
        if(result){
            response.success = true;
            response.data = result;
            res.status(200).json(response)
        }else{
            response.data = "";
            res.status(200).json(response)
        }       
    } catch (error) {
        response.message = error;
        res.status(403).json(response);
        console.log(error);
        
    }
}