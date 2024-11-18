import { Box, Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import Limage from '../../assets/loginimage/Limage.png'
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate,Navigate } from 'react-router-dom';
import instance from '../../services/AxiosOder';
import { Toast } from '../../common/funtion';


export default function Register() {

    const navigate = useNavigate();
    
    const navigateLogin = () => {
        navigate('/login')
    }



    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [comPassword, setComPassword] = useState();


    const changeRegister = () => {

        if (name !== '' && email !== '' && password !== '' && comPassword !== '') {

            if (password == comPassword) {

                const data = {
                    student_name: name,
                    email: email,
                    password: password
                }

                instance.post('/register', data)
                    .then((res) => {

                        Toast.fire({
                            icon: "success",
                            title: "Login in Succse..!"
                          });
                        console.log(res.data);
                
                    })
                    .catch((err) => {
                        Toast.fire({
                            icon: "error",
                            title: "Login in Faild"
                          });
                        console.log(err);
                    })

            }else{
                console.log('check your password and comfarm password..!');
            }

        }else{
            console.log('fil all fileds..!');
        }
    }



    return (
        <div>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>



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
                                onChange={(val) => setName(val.target.value)}
                            />

                            <TextField
                                id="standard-textarea"
                                label="Email"
                                placeholder="enter email"
                                multiline
                                variant="standard"
                                sx={{ display: 'flex' }}
                                onChange={(val) => setEmail(val.target.value)}
                            />

                            <TextField
                                id="standard-textarea"
                                label="Password"
                                placeholder="enter password"
                                multiline
                                variant="standard"
                                sx={{ display: 'flex', marginTop: 2 }}
                                onChange={(val) => setPassword(val.target.value)}
                            />

                            <TextField
                                id="standard-textarea"
                                label="Confirm password"
                                placeholder="re-enter password"
                                multiline
                                variant="standard"
                                sx={{ display: 'flex', marginTop: 2 }}
                                onChange={(val) => setComPassword(val.target.value)}
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
                                    onClick={() => changeRegister()}
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
