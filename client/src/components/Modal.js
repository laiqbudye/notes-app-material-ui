import * as React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => {
    return {
        modalCenter: {
            display: 'flex',
            alignItems: "center",
            justifyContent: 'space-evenly',
            marginTop: theme.spacing(2)
        }
    }
})

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function TransitionsModal({ onClick }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <DeleteOutlined />
            </IconButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography style={{ textAlign: 'center' }} id="transition-modal-title" variant="h6" component="h2">
                            This action cannot be undone
                        </Typography>
                        <div className={classes.modalCenter}>
                            <Button onClick={onClick}>Continue</Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
