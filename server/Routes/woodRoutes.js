const express =require('express');
const router=express.Router();


    // Middlewares
    const { auth } = require('../middleware/auth');
    const { admin } = require('../middleware/admin');
 
    const { Wood } = require('../models/wood');

    //=================================
    //              WOODS
    //=================================

    router.post('/api/product/wood',auth,admin,(req,res)=>{
        const wood = new Wood(req.body);

        wood.save((err,doc)=>{
            if(err) return res.json({success:false,err});
            res.status(200).json({
                success: true,
                wood: doc
            })
        })
    });

    router.get('/api/product/woods',(req,res)=>{
        Wood.find({},(err,woods)=>{
            if(err) return res.status(400).send(err);
            res.status(200).send(woods)
        })
    })
   

module.exports = router;
