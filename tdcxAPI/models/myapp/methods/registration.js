const registerSchema = require("../../../schemas/Mongoose/registerschema").registerSchemaModel;

module.exports = function(data){
    return( async()=>{
        try {
            let result = await registerSchema.create({
                ...data
            })
            
            return result;
        } catch (error) {
            log.error(error)
            throw error;
        }
    })()
}