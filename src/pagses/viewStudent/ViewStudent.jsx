import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Box, Typography } from '@mui/material';
import AddDialog from '../../common/dialogBox/AddDialog';
import UpdateDialog from '../../common/dialogBox/UpdateDialog';
import { Instagram, Key } from '@mui/icons-material';
import instance from '../../services/AxiosOder';
import { useEffect, useState } from 'react';
import StudentTable from '../../common/studentTable/StudentTable';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 1,
    },
}));



export default function ViewStudent() {


    // Get api call

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudent();
    }, []);


    const getStudent = () => {

        const token = localStorage.getItem('iap-token');

        instance.get('/student/getAll', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.data);
                setStudents(res.data);
            })

            .catch((err) => {
                console.log(err);
            })
    };

    // delete api call


    const deleteStudent = (id) => {

        const token = localStorage.getItem('iap-token');

        instance.delete(`/student/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

            .then((res) => {
                console.log(res.data);
                getStudent();
            })

            .catch((err) => {
                console.log(err);
            })
    };


    // update api call


    const updateStudent = (id) => {

        const token = localStorage.getItem('iap-token');

        instance.put(`/student/update/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.data);
                getStudent();
            })

            .catch((err) => {
                console.log(err);
            })
    };


    return (
        <div>


            <Box sx={{ display: 'flex', justifyContent: 'center', boxShadow: 4, borderRadius: 1 }}>
                <Typography
                    sx={{ fontSize: 30, fontWeight: 'bold' }}
                >View Student Page</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: 1 }}>
                <AddDialog />
            </Box>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>No</StyledTableCell>
                            <StyledTableCell align='center'>ID</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Age</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">Contact</StyledTableCell>
                            <StyledTableCell align="center">User ID</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    {
                        students.map((val, index) => (
                            <StudentTable
                                key={index}
                                no={index + 1}
                                id={val.id}
                                name={val.student_name}
                                age={val.student_age}
                                address={val.student_address}
                                contact={val.student_contact}
                                userId={val.user_id}
                                deleteStudent={()=>deleteStudent(val.id)}
                                update={()=>updateStudent(val.id)}
                            />

                        ))
                    }




                </Table>

            </TableContainer>
        </div>
    );
}
