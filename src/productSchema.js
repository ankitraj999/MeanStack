const mongoose=require('mongoose')
const prodSchema=mongoose.Schema;
const Schema = new prodSchema(
    {
     productName:{
         type:String,
         required:false
     } ,
     productPrice:{
         type:Number,
         required:false
     }  
    },{
        collection:'servers'
    }
);

module.exports=mongoose.model('productTable',Schema)
