const port = 1337;
const express = require('express');
const app = express();
const Handlers = require('./models/handlers');
const {coinFlip} = Handlers

app.get('/coinFlip', coinFlip)

app.listen(port, ()=>{
    console.log(`now listening on port: ${port}`)
})