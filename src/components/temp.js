//mongoose , app.use, 
const { error } = require('console');
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  
text:{
    type:string,
    required:true,
}    

completed:{
    type:Boolean,
    default:false,
},

});


module.exports = mongoose.model('Todo',todoSchema);

Router.get('/todos',async(req,res)=>{
    try{
        const todos = await todoService.getallTodos();
        res.json(todos);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({
            error:'Internal server error'
        });
    }
})


Router.post('/todos',async(req,res)=>{
    try{
     const newTodo = req.body;
     if(!newTodo.text){
        throw new error('Missing required fields');
     }
     const createdTodo = await todoService.createTodo(newTodo);
     res.status(201).json(createdTodo);
    }
    catch(err){
    console.error(err.message);
    res.status(400).json({error:err.message});
    }
});


const userSchema = new mongoose.Schema({

username:{
    type:string,
    required:true,
}    

email:{
    type:string,
    required:true,
}

password:{
    type:string,
    required:true,
}

});


userSchema.pre
