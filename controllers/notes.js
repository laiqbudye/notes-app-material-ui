const Note = require('../models/Note');

//get all notes
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        return res.status(200).json({
            data: notes
        })
    } catch (error) {
        return res.status(500).json({
            error: "server error"
        })
    }
}

exports.createNote = async (req, res) => {
    try {
        const noteData = {
            title: req.body.title,
            details: req.body.details,
            category: req.body.category
        }
        const note = new Note(noteData)
        await note.save()

        return res.status(201).json({
            data: note
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        
        if (!note) {
            return res.status(404).json({
                error: 'Note not found',
            })
        }

        await note.remove();

        return res.status(200).json({
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error"
        })
    }
}