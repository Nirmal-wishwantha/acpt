import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function UpdateDialog() {
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
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
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
                    />


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: 'red' }}>Cancel</Button>
                    <Button type="submit">Update Student</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
