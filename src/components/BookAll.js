import useBookAll from "./useBookAll";
import Main from "../layouts/Main"
import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
function BookAll() {
  const style ={
    display: 'flex',
    justifyContent: 'center',
    marginTop: "20px",
  }
  const books = useBookAll();
  return (
    <Main>
      <Container>
      <Typography variant="h4" style={style}>Book Details</Typography>
      <Button variant="contained" color="primary">
        Add User
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Namebook</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">NXB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.namebook}</TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.publication_date}</TableCell>
                <TableCell align="right" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                <TableCell align="right" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>

              </TableRow>
          ))}
        </TableBody>
      </Table>
      </Container>
    </Main>
  );
}
export default BookAll;
