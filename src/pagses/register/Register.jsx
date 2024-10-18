import { Box, Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import Limage from '../../assets/loginimage/Limage.png'
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';





export default function Register() {

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

   

    return (
        <div>

            <Box sx={{ display: 'flex', justifyContent: 'center',marginTop:3 }}>



                <Box sx={{ boxShadow: 8, width: 700, height: 400, borderRadius: 3, }}>



                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <img src={Limage} style={{ width: 300, marginTop: 40, padding: 10 }}></img>
                        </Box>



                        <Box sx={{ marginTop: 2, marginLeft: 8, width: 300 }}>


                            <Box >
                                <Typography sx={{ textAlign: 'center', fontWeight: 700, fontSize: 30 }} >Register</Typography>
                            </Box>

                            <TextField
                                id="standard-textarea"
                                label="Name"
                                placeholder="enter name"
                                multiline
                                variant="standard"
                                sx={{ display: 'flex', marginBottom: 2 }}
                                onChange={(val) => SetName(val.target.value)}
                            />

                            <TextField
                                id="standard-textarea"
                                label="Email"
                                placeholder="enter email"
                                multiline
                                variant="standard"
                                sx={{ display: 'flex' }}
                                onChange={(val) => SetEmail(val.target.value)}
                            />

                            <TextField
                                id="standard-textarea"
                                label="Password"
                                placeholder="enter password"
                                multiline
                                variant="standard"
                                sx={{ display: 'flex', marginTop: 2 }}
                                onChange={(val) => SetPassword(val.target.value)}
                            />

                            <TextField
                                id="standard-textarea"
                                label="Confirm password"
                                placeholder="re-enter password"
                                multiline
                                variant="standard"
                                sx={{ display: 'flex', marginTop: 2 }}
                                onChange={(val) => SetComPassword(val.target.value)}
                            />

                            <Box>

                                <Typography
                                    sx={{ fontSize: 12, color: 'blue', cursor: 'pointer' }}
                                    onClick={() => navigateLogin()}
                                >Login ?
                                </Typography>


                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>

                                <Button startIcon={<LoginIcon />}
                                    sx={{
                                        backgroundColor: '#00ace6', padding: 1, width: 110, color: 'white',
                                        fontWeight: 600, ":hover": { backgroundColor: '#0086b3' }, boxShadow: 8
                                    }}
                                    // onClick={() => submitRegister()}
                                >Register
                                </Button>

                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>

        </div>
    )
}
