const express = require('express');
const bodyparser =  require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const userroute = require('./routes/userroute')


mongoose.connect('mongodb://localhost:27017/user',{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('database is connected')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

const PORT = 5001;
app.listen(PORT,()=>{
    console.log(`server is connected ${PORT}`)
});
app.use('/api',userroute)