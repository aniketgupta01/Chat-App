const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./Routes/admin.js');
const loginRoutes = require('./Routes/login.js');

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoutes);
app.use(adminRoutes);

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to Chat App</h1>'
    )
})


app.listen(5000);
