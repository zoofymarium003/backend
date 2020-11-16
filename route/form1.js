const express=require("express");
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const formModel=require('../schema/formSchema1')
app.use(bodyParser.json({ extended: true }))
app.set('view engine','ejs');
app.set('views','../public/views');
app.get('/',(req,res)=>{
    res.render("form1");
})

app.post('/getData',(req,res)=>{
    const insertData=new formModel({
        username:req.body.username,
        gender:req.body.gender,
        email:req.body.email,
        password:req.body.password,
        rateus:req.body.rateus
    })
    console.log(insertData)
    insertData.save((err,data)=>{
        if (err) throw err
        else{
            console.log(data)
        }
    })
       
    })
    app.get('/display',(req,res)=>{
        console.log('hii')
        var getData=formModel.find({})
        
        getData.exec((err,data2)=>{
            console.log(data2)
       
        res.render('display',{record:data2})
    })
    })
    app.get('/display2',(req,res)=>{
     var getData2=forModel.find({}) 
     getData2.exec((err,datas)=>{
         if(err) throw err;
         else{
             console.log(datas)
         }
     
    })
    })
    app.listen(3000)