const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    details: {
        type: String,
        required: [true, 'Please add details']
    },
    category: {
        type: String,
        required: [true, 'Please add a category']
    }
})

module.exports = mongoose.model('Notes', NotesSchema);