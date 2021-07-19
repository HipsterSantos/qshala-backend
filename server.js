const express = require('express'); 
const app = express() ; 
const multer = require('multer');

app.use(express.static(__dirname + '/public')) ;
app.use(express.json());
app.use(express.urlencoded());
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')},
        filename: function (req, file, cb) {
            cb(null, file.originalname+Date.now());
        }
    });

const PORT  = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`'listening on port ' ${PORT}`);
});