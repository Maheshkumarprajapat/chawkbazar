const express = require('express');
const env = require('./config/envConfig');

const app  = express();
app.get('/',(req,res)=>{
    res.json({msg: "Welcome to chawkbazar"});
})
const port = env.PORT|| 5000;

app.listen(port,()=>{
    console.log(`Your server is running at port number: http://localhost:${port}`);
})