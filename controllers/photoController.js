const {Photo} = require('../models/photo.model'); 

async function listAllPhotos (){
    const photos =  await Photo.find({});
    return photos;
}

async function listSinglePhoto ({id}){
    const photo = await Photo.findOne({_id:id});
    return photo;
}

async function creatSinglePhoto(props){
    const photo = new Photo({
        ...props
    });
    return await photo.save();
}

exports = {
    listAllPhotos,
    listSinglePhoto,
    creatSinglePhoto,  
};