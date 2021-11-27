const express = require('express');
const router = express.Router();
const { getNotes, createNote, deleteNote } = require('../controllers/notes');

// route to get all posts
router.route('/').get(getNotes);

// route to submit post
router.route('/create').post(createNote);

// route to delete a post
router.route('/:id').delete(deleteNote);

module.exports = router;