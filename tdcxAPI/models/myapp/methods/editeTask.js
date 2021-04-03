const taskSckema = require("../../../schemas/Mongoose/taskData").taskSchemaModel;

module.exports = function(id, body){
    return( async()=>{
     
       let result = await taskSckema.findByIdAndUpdate(id, body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
           return `Cannot update Task with id=${id}. Maybe Task was not found!`
          } else return "Task updated successfully."
        })
        .catch(err => {
         return "Error updating Task with id=" + id
        });

        return result;
    })()
}