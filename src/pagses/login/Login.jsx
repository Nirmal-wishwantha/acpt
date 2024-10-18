import { Box, Button, Typography, TextField } from '@mui/material';
import React from 'react';
import Limage from '../../assets/loginimage/Limage.png';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    
    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate('/register');
    };

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Box sx={{ boxShadow: 8, width: 700, height: 400, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <img src={Limage} alt="Login" style={{ width: 300, marginTop: 40, padding: 10 }} />
                        </Box>
                        <Box sx={{ marginTop: 2, marginLeft: 8, width: 300 }}>
                            <Box sx={{ marginBottom: 14 }}>
                                <Typography sx={{ textAlign: 'center', fontWeight: 700, fontSize: 30 }}>
                                    Login
                                </Typography>
                            </Box>
                            <TextField
                                id="email-input"
                                label="Email"
                                placeholder="Enter email"
                                variant="standard"
                                sx={{ display: 'flex' }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                id="password-input"
                                label="Password"
                                placeholder="Enter password"
                                variant="standard"
                                type="password"

                                sx={{ display: 'flex', marginTop: 2 }}
                                onChange={(e) => setPass(e.target.value)}
                            />
                            <Box>
                                <Typography
                                    sx={{ fontSize: 12, color: 'blue', cursor: 'pointer' }}
                                    onClick={navigateRegister}
                                >
                                    Register?
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                                <Button
                                    startIcon={<LoginIcon />}
                                    // onClick={changeLogin}
                                    sx={{
                                        backgroundColor: '#00ace6',
                                        padding: 1,
                                        width: 110,
                                        color: 'white',
                                        fontWeight: 600,
                                        ':hover': { backgroundColor: '#0086b3' },
                                        boxShadow: 8
                                    }}
                                >
                                    Login
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
