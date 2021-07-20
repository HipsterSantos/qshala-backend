const express = require('express'); 
const router = express.Router();
const routerlog = require('debug')('router-log');
const {listAllPhotos, listSinglePhoto,createSinglePhoto} = require('../controllers/photoController');
router.get('',async (req, res) => {
    let allPhotos = await listAllPhotos();
    res.render('home.ejs');
})

router.get('/show/:id',async (req,res) =>{
    let photo = await listSinglePhoto(req.params.id);
    res.render('single.ejs');
})

router.get('/new',async (req,res) =>{
    res.render('postOne.ejs'); 
})

router.post('post/new', async (req,res) =>{
    let photo = await createSinglePhoto(req.body);
    res.redirect('/');
});

module.exports = router;