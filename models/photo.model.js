const {Schema,model,Types} = require('mongoose'); 

const PhotoSchema = new Schema({
    imgName: {type: String , required: true}, 
    imgPath: {type: String , required: true},
    imgDetails: {type: String , required: true}
});

const Photo = model('Photo', PhotoSchema);

module.exports = {Photo, PhotoSchema};