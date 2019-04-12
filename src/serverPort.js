const express=require('express')
const app=express()
const prodRouter=express.Router()
const prodServer=require('./productSchema')

prodRouter.route('/add').post(function(req,res){
    const prodInstance= new prodServer(req.body);
    prodInstance.save().then(prodInstance=>{
        res.json('Item added successfully')
    }).catch(err=>{
        res.status(400).send("unable to save to database")
    });
});

prodRouter.route('/').get(function(req,res){
    prodServer.find(function(err,serverports){
        if(err){
            console.log(err)
        }else{
            res.json(serverports);
        }
    });
});
prodRouter.delete('/:id', (req,res, next)=> {
    //deleting data
 
    prodServer.findByIdAndDelete({_id: req.params.id }, function (err,result) {
    if (err) { 
    res.json(err);
    
    }
    
    else {
    
    res.json(result);
    
    }
    
    });
    
    });

//get item by Id
prodRouter.get('/:id',(req,res)=>{
    prodServer.findById({_id:req.params.id},(err,items)=>{
        if(err)
        {
            res.json(err)
        }
        else{
           // console.log(items)
            res.json(items);
        }
    })
})

  //updating Item
  prodRouter.put('/item/:id', (req,res, next)=> {
    //updating data
    
    prodServer.findOneAndUpdate({ _id: req.params.id }, {
    
    $set: {productName:  req.body.productName,
    productPrice:  req.body.productPrice
    
    }}, function (err,result) {
       if (err) {res.json(err);}
    else {
    // res.json(result);
    res.json({
    'Item has been updated successfully' })
    
    }
    
    })
    
    });

module.exports=prodRouter