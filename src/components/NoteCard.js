import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

function NoteCard({ note, handleNoteDelete }) {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleNoteDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                >
                </CardHeader>
                <CardContent>
                    <Typography color='textSecondary'>
                        {note.detail}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
