const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({ extended: true }))
const formModel=require('../schema/formSchema')
app.set('view engine','ejs');
app.set('views','../public/views');
app.get('/',(req,res)=>{
    res.render('form');  
}) 
//hii
app.post('/getData',(req,res)=>{
const insertData=new formModel({
    username:req.body.username,
    password:req.body.password
})
console.log(insertData)
insertData.save((err,data)=>{
    if (err) throw err
    else{
        console.log(data)
    }
})
   
})

    
app.listen(3000,()=>{
    console.log('run')
});