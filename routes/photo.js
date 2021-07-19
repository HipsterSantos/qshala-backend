const express = require('express'); 
const router = express.Router();
const {listAllPhotos, listSinglePhoto,createSinglePhoto} = require('../controllers/photo');
router.get('/',async (req, res) => {
    let allPhotos = await listAllPhotos();
    res.render()
})

app.get('/',async (req,res) =>{
    res.send('welcome by id ')
})

app.get('/new',async (req,res) =>{
    console.log('adding new image'); 
})

app.post('post/new', async (req,res) =>{});