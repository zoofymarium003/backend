
const mongoose=require('mongoose')
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/birbal', { useNewUrlParser: true },)
    .then(() => console.log('db connection successful'))
    .catch((err) => console.error(err))

var conn = mongoose.connection
var forSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,

    }

    
})
var formModel=new mongoose.model('form',forSchema)
module.exports=formModel