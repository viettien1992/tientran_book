import useBookAll from './useBookAll';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
function BookAll() {
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const books = useBookAll();
        const classes = useStyles();
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">namebook</TableCell>
                            <TableCell align="right">author</TableCell>
                            <TableCell align="right">description</TableCell>
                            <TableCell align="right">NXB</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((row,index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">{row.id}
                                </TableCell>
                                <TableCell align="right">{row.namebook}</TableCell>
                                <TableCell align="right">{row.author}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.publication_date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
}
export default BookAll;