import { useHistory } from "react-router-dom";
import useBook from './useBook';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Main from "../layouts/Main";
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    Link:{
        textDecoration:"none",
    }
});
function Book (props){
    let history = useHistory();
    const book=useBook(props)[0];
    const isLoading=useBook(props)[1];
    const classes = useStyles();
    return (
        <Main>
            {isLoading===true &&(
                <div>is loading</div>)}

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
                        {book.map((row,index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.id}
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
            <Button variant="outlined" onClick={() => {history.push("/book");}}>Back</Button>
        </Main>
    )
}
export default Book;