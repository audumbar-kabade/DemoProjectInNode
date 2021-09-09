var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).send({message: 'from dept'});
});

router.post('/',(req,res,next)=>{
    res.status(200).send({message: 'hello from dept post Method'});
});

module.exports=router;