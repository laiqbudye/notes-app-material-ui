import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    field: {
        marginBottom: 20,
        marginTop: 20,
        display: 'block'
    }
})

function Create() {
    const classes = useStyle();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [category, setCategory] = useState('todos');
    const [titleError, setTitleError] = useState(false);
    const [detailError, setDetailError] = useState(false);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailError(false);

        if(!title){
            setTitleError(true)
        }

        if(!detail){
            setDetailError(true)
        }

        if(title && detail){
            async function submitData(){
                await fetch('http://localhost:8000/notes', {
                    method:'POST',
                    headers:{
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({title, detail, category})
                })
                history.push('/');
            }
            submitData();
        }
    }

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
                color="textSecondary"
            >
                Create a new Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <TextField
                    className={classes.field}
                    label='New Note'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required     // here it does not checks for validate, it just adds only asterik in front of label
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    error={titleError}
                >
                </TextField>

                <TextField
                    className={classes.field}
                    label='Details'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    multiline       // it says textfield will contain multiple lines
                    rows={4}      // no.of rows it will show
                    required
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    error={detailError}
                >
                </TextField>

                <FormControl className={classes.field}>
                    <FormLabel color='secondary'>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value='money' control={<Radio />} label='Money' />
                        <FormControlLabel value='todos' control={<Radio />} label='Todos' />
                        <FormControlLabel value='reminders' control={<Radio />} label='Reminders' />
                        <FormControlLabel value='work' control={<Radio />} label='Work' />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<ChevronRightIcon />}
                >
                    Submit
                </Button>
            </form>

        </Container>
    )
}

export default Create
