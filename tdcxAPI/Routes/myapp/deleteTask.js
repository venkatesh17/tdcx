const DeleteTask = require(appPath + '/models/myapp')

module.exports = async(req, res)=>{
    if(!req.body.name) {
        return res.status(400).send({
            message: "Task content can not be empty"
        });
    }

    let response = {
        success: false,
        message: undefined,
        data: ""
    }

    let taskdelete = new DeleteTask()
    try {
        let result = await taskdelete.deleteTask(req.params.id);

        console.log("-----------------", result);
             
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