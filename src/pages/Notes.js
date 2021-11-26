import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Masonry from 'react-masonry-css'
import NoteCard from '../components/NoteCard';
import { fetchNotes, deleteNote } from '../actions/notes';
import { connect } from "react-redux";

function Notes({ notes, fetchNotes, deleteNote }) {

    useEffect(() => {
        fetchNotes();
    }, [])

    const handleNoteDelete = (id) => {
        deleteNote(id)
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

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps, { fetchNotes, deleteNote })(Notes)
