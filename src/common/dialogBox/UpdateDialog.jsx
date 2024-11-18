import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function UpdateDialog({update}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>

            <Button sx={{ color: 'white', backgroundColor: '#0d47a1', boxShadow: 8, alignItems: 'center' }} onClick={handleClickOpen} >
                Update
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
               
            >
                <DialogTitle>Add Student</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>(e.target.value)}

                    />

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="age"
                        label="Age"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>(e.target.value)}

                    />

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="address"
                        label="Address"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>(e.target.value)}
                        
                    />

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="contact"
                        label="Contact"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e)=>(e.target.value)}
                    />


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: 'red' }}>Cancel</Button>
                    <Button type="submit" onClick={update}>Update Student</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
