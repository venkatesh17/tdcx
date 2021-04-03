const fs = require('fs')

class MyApp{
    constructor(){
        
    }
}

fs.readdirSync(__dirname+"/methods/").forEach(function(file){
   if(file != 'index.js'){
       let filename = file.replace('.js','')              
       MyApp.prototype[filename] = require(__dirname+"/methods/"+filename)
   }
})

module.exports = MyApp;