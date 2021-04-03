const taskSckema = require("../../../schemas/Mongoose/taskData").taskSchemaModel;

module.exports = function(id, body){
    return( async()=>{
     
       let result = await taskSckema.findByIdAndRemove(id)
       .then(data => {
         if (!data) {
           retyrn`Cannot delete Task with id=${id}. Maybe Task was not found!`
         } else {
           return  "Task was deleted successfully!"
         }
       })
       .catch(err => {
        return "Could not delete Task with id=" + id
       });

        return result;
    })()
}