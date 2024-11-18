import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Box } from '@mui/material';
import UpdateDialog from '../../common/dialogBox/UpdateDialog';

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

export default function StudentTable({ no, id, name, age, address, contact, userId, deleteStudent, update }) {
    return (
        
               
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell align='center'>{no}</StyledTableCell>
                        <StyledTableCell align='center'>{id}</StyledTableCell>
                        <StyledTableCell align="center">{name}</StyledTableCell>
                        <StyledTableCell align="center">{age}</StyledTableCell>
                        <StyledTableCell align="center">{address}</StyledTableCell>
                        <StyledTableCell align="center">{contact}</StyledTableCell>
                        <StyledTableCell align="center">{userId}</StyledTableCell>
                        <StyledTableCell align='center'>
                            <Box>
                                <Button
                                    sx={{ color: 'white', backgroundColor: '#b71c1c', boxShadow: 8, marginRight: 1 }}
                                    onClick={deleteStudent}
                                >
                                    Delete
                                </Button>
                                <UpdateDialog 
                               update={update}
                                 />
                            </Box>
                        </StyledTableCell>
                    </StyledTableRow>
                </TableBody>
        
    );
}
