const taskSckema = require("../../../schemas/Mongoose/taskData").taskSchemaModel;

module.exports = async()=>{
    return(async()=>{
        try{
            let data = await taskSckema.find()                       
            return data;
        }catch(e){
            console.log(e);
            throw e
        }
    })()
}