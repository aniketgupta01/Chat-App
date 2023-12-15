const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/login',(req,res,next)=>{
    res.send(
        `<form action="/login" /login" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" method="POST" ><input type="text" name="username" placeholder="Username" id="username"></input><button type="submit">Login</button></form>`
        
      );

     
})

router.post('/login',(req,res,next)=>{
  
    
    res.redirect("/");
})

module.exports = router;