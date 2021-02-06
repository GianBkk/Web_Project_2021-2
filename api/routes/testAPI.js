const express = require("express");
const router= express.Router();


router.get('/', function(req,res,next){
    res.send('API Is working properly')
});

module.exports = router;

