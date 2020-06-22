import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Main from "../layouts/Main";
import { useRouteMatch } from "react-router-dom";
import useBook1 from "../hook/useBook1";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Button,
  TextField,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '200px',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function EditBook(props) {
  const [name, setBooks] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [nxb, setNxb] = useState('');

  const handleChange = (e) => {
    let a = e.target.name;
    if (a == 'name')
      setBooks(e.target.value);
    else if (a == 'author')
      setAuthor(e.target.value);
    else if (a == 'description')
      setDescription(e.target.value);
    else if (a == 'nxb')
      setNxb(e.target.value);
  };

  const bookId = useRouteMatch().params.id;
  const submitForm = (e) => {
    axios.put(`https://tientran-laravel-book.herokuapp.com/api/book/${bookId}`, { "namebook": name, "author": author, "description": description, "publication_date": nxb })
      .then(function (response) {
        console.log(response.data);
        // handle việc lấy dữ liệu thành công
        window.location = '/book'
      })
      .catch(function (error) {
        // handle lỗi
        console.log(error);
      })
    // không reload trang khi call
    e.preventDefault();
  };
  var book = useBook1(bookId);
  const classes = useStyles();
  if (book[0]) {
    return (
      <Main>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 20,
            padding: 20,
          }}
        >
          <form style={{ width: "50%" }} onSubmit={submitForm}>
            <h1>Edit Book Form</h1>
            <TextField type="text" placeholder="NameBook" fullWidth margin="normal" name="name" defaultValue={book[0].namebook} onChange={handleChange} />
            <TextField type="text" placeholder="Author" fullWidth margin="normal" margin="normal" name="author" defaultValue={book[0].author} onChange={handleChange} />
            <TextField type="text" placeholder="Description" fullWidth margin="normal" margin="normal" name="description" defaultValue={book[0].description} onChange={handleChange} />
            <TextField type="date" placeholder="NXB" type='date' fullWidth margin="normal" margin="normal" name="nxb" defaultValue={book[0].publication_date} onChange={handleChange} />
            <Button type="submit" variant="contained" color="primary" size="medium">
              Save
                    </Button>
          </form>
        </div>
      </Main>
    );
  }
  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
export default EditBook;
