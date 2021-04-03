const TaskSchema = require(appPath + '/models/myapp')

module.exports = async (req,res)=>{

    let response = {
        success:false,
        data:'',
        message:undefined
    }
    let getAll = new TaskSchema()
   
    let result = await getAll.allTasks()
    .catch((err)=>{
        response.message = err;
        res.status(403).json(response)
    })
    response.success = true
    response.data = result
    res.status(200).json(response)
}