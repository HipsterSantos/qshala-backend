const express = require('express'); 
const app = express() ; 
const multer = require('multer');
const logger = require('debug')('logger');
const dbresponse = require('debug')('database-log');
const mongoose = require('mongoose');
const photoRoutes  = require('./routes/photo');
app.use(express.static(__dirname + '/public')) ;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const {APP_PORT,APP_DBURL} = process.env;
(async function(){
     mongoose.connect('mongodb://localhost/mongeship',
     {useNewUrlParser:true,useUnifiedTopology:true})
    .then(val=>dbresponse(`Connected to database`))
    .catch(err=>dbresponse(err));
     ;
})()
app.set('views','./views/');
app.set('view engines','ejs');

app.use('/api/photos/',photoRoutes);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')},
        filename: function (req, file, cb) {
            cb(null, file.originalname+Date.now());
        }
    });

const PORT  = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    logger(`'listening on port ' ${PORT}`);
});