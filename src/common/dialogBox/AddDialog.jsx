import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import instance from '../../services/AxiosOder';
import { useState } from 'react';

export default function AddDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [address, setaddress] = useState();
    const [contact, setcontact] = useState();



    const studentsave = () => {
        if (name !== '' && age !== '' && address !== '' && contact !== '') {
            const data = {
                student_name: name,
                student_age: age,
                student_address: address,
                student_contact: contact
            };
            const token = localStorage.getItem('iap-token');
    
            instance.post('/student/save', data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            .then((res) => {
                console.log(res);
                window.location.reload();
            })
          
            .catch((err) => {
                console.log('Error occurred:', err);
            });
        } else {
            console.log('Please fill all fields');
        }
    };
    

    return (
        <React.Fragment>

            <Button sx={{ color: 'white', backgroundColor: '#004d40', boxShadow: 8, alignItems: 'center' }} onClick={handleClickOpen} >
                Add Student
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
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="age"
                        label="Age"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="address"
                        label="Address"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setaddress(e.target.value)}
                    />

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="contact"
                        label="Contact"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setcontact(e.target.value)}
                    />


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: 'red' }}>Cancel</Button>
                    <Button type="submit" onClick={studentsave}>Add Student</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
