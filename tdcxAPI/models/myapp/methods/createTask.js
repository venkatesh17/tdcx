const taskSckema = require("../../../schemas/Mongoose/taskData").taskSchemaModel;

module.exports = function(data){
    return( async()=>{
        try {
            let result = await taskSckema.create({
                ...data
            })
            
            return result;
        } catch (error) {
            log.error(error)
            throw error;
        }
    })()
}