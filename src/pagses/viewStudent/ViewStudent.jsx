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
import AddDialog from '../../common/dialog/AddDialog';
import UpdateDialog from '../../common/dialog/UpdateDialog';



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
    return (
        <div>


            <Box sx={{display:'flex' ,justifyContent:'center',boxShadow:4,borderRadius:1}}>
                <Typography
                sx={{fontSize:30,fontWeight:'bold'}}
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
                    <TableBody>
                        <StyledTableRow>

                            <StyledTableCell align='center'>01</StyledTableCell>
                            <StyledTableCell align='center'>Id</StyledTableCell>
                            <StyledTableCell align="center">kasun</StyledTableCell>
                            <StyledTableCell align="center">12</StyledTableCell>
                            <StyledTableCell align="center">panadura</StyledTableCell>
                            <StyledTableCell align="center">1234567890</StyledTableCell>
                            <StyledTableCell align="center">20</StyledTableCell>


                            <StyledTableCell align='center'>
                                <Box>
                                    <Button sx={{ color: 'white', backgroundColor: '#b71c1c', boxShadow: 8, marginRight: 1 }}>Delete</Button>

                                    <UpdateDialog/>

                                </Box>
                            </StyledTableCell>



                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
