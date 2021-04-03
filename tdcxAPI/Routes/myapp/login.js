const Login = require(appPath+"/models/myapp");

module.exports = async(req,res)=>{
    let response = {
        success: false,
        message: undefined,
        data: "",
    }
    
    let login = new Login();
    let result = await login.login(req.body);
    
    console.log(result)
    try {
        if(result){
            response.success = true,
            response.data = result,
            res.status(200).json(response)
        }else {
            response.data = '',
            res.status(403).json(response) 
        }         
     
    } catch (error) {
        console.log(error);
        response.message = error;
        res.status(403).json(response) 
    }
}

