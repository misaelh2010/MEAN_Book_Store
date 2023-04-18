//schema will be drafted up for the project app
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    }
},
    {
        collection: 'books'

    })
//you have to export the model
module.exports = mongoose.model('Book', Book)