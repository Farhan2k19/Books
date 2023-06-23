const { default: mongoose} = require('mongoose');

const moongoose=require('mongoose');


//create schema for books having title,author,category,price
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});

//export the model
module.exports=mongoose.model('Book',bookSchema);


