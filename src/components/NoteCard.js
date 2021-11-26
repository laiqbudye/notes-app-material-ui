import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton, makeStyles } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import { blue, yellow, pink, green } from '@material-ui/core/colors';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'work') {
                return yellow[700]
            }  
            if (note.category === 'todos') {
                return pink[700]
            }  
            if (note.category === 'money') {
                return green[700]
            } 
            return blue[700]
        }
    }
})
function NoteCard({ note, handleNoteDelete }) {
    const classes = useStyles(note);

    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleNoteDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
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
