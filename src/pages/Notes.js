import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NoteCard from '../components/NoteCard';

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:8000/notes');
            const data = await res.json();
            setNotes(data)
        }
        fetchData();
    }, [])

    const handleNoteDelete = async (id) => {
        const res = await fetch(`http://localhost:8000/notes/${id}`, {
            method: 'DELETE'
        });

        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    }

    return (
        <Container>
            <Grid container spacing={3}>
                {notes && notes.map(note => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <NoteCard note={note} handleNoteDelete={handleNoteDelete} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Notes
