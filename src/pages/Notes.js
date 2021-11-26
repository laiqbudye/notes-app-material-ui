import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Masonry from 'react-masonry-css'
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

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes && notes.map(note => (
                    <div item key={note.id} xs={12} md={6} lg={4}>
                        <NoteCard note={note} handleNoteDelete={handleNoteDelete} />
                    </div>
                ))}
            </Masonry>
        </Container>
    )
}

export default Notes
