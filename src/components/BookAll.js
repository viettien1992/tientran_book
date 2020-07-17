import useBookAll from "../hook/useBookAll";
import Main from "../layouts/Main";
import React, { Component, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import deleteBook from "../hook/useDeleteBook";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
function BookAll() {
  const { books, fetchBooks } = useBookAll();
  useEffect(() => {
    fetchBooks(1, 10);
  }, []);
  let history = useHistory();
  const style = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const editBook = (id) => {
    history.push("/book1/edit/" + id);
  };
  const red = () => {
    history.push("/book1/add");
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
      },
    },
  }));
  const classes = useStyles();
  // click vào lấy page đang click
  const handleChange = (event, value) => {
    fetchBooks(value, 10);
  };
  return (
    <Main>
      <Container>
        <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
          Book Details
        </Typography>
        <Button variant="contained" color="primary" onClick={() => red()}>
          Add Book
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
            {books.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.namebook}</TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.publication_date}</TableCell>
                <TableCell align="right" onClick={() => editBook(row.id)}>
                  <CreateIcon />
                </TableCell>
                <TableCell align="right" onClick={() => deleteBook(row.id, () => { fetchBooks(); })}>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.root}>
          <Pagination count={10} color="primary" onChange={handleChange} />
        </div>
      </Container>
    </Main>
  );
}
export default BookAll;
