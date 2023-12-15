const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('msg.txt',{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log(err);
        }
        res.send(`<body>${localStorage.getItem('username')} : ${data}</body><form action="/chat" method="POST"><input type="text" name=message placeholder="Write a message"></input><input type="hidden" name="username" value="localStorage.getItem('username')"></input><button type="submit">Send</button><form>`)

    })


    
})

router.post("/chat",(req,res,next)=>{
    fs.appendFile('msg.txt',`${req.body.message} `,(err)=>{
        res.status(302).redirect('/')
    })
    
})




module.exports=router;