const EditTask = require(appPath + '/models/myapp')

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

    let taskEdit = new EditTask()
    try {
        let result = await taskEdit.editeTask(req.params.id, req.body);
             
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