import express from 'express';
import db from './db.js';
import user from './models/user.js'
import bodyParser from "body-parser"
const app = express();
db()

app.use(bodyParser.json())

app.get('/',(req,res)=>{
  try{
res.send('welcome to Ptlr collage database');
  }catch(error){
console.error('data not found',error);
  }
})

app.post('/user',async(req,res)=>{
  try{
const data = req.body;
const NewUser = new user(data);
const response = await NewUser.save()
res.status(200).json({message:'data saved successful', response}) 
  }catch(error){
console.error('data not saved' , error);
res.status(500).json({message:'data not saved ',error})

  }
})

app.get('/user', async(req,res)=>{
  try{
    const data = await user.find()
    res.status(200).json({message :'data is fetched', user: data})
    
  }catch(error){
res.status(500).json({message:"data not found",error})
  }
})

app.put('/user/:id',async(req,res)=>{
  try{
    const {id} = req.params;
    const data = req.body;
    const response = await user.findByIdAndUpdate(id, data, {new:true});  
    res.status(200).json({message:'data updated successfully', response})
  }catch(error){
    console.error('data not updated', error);
    res.status(500).json({message:'data not updated', error})
  }
})

app,delete('/user/:id',async(req,res)=>{
  try{
    const {id} = req.params;
    const response = await user.findByIdAndDelete(id);
    if(!response){
      return res.status(404).json({message:'data not found'})
    }
    res.status(200).json({message:'data deleted successfully', response})
  }catch(error){
    console.error('data not deleted', error);
    res.status(500).json({message:'data not deleted', error})
  }
})

app.listen(3000,()=>{
  console.log('server is connected');
  
})