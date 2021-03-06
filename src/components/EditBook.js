import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Main from "../layouts/Main";
import { useRouteMatch } from "react-router-dom";
import {
    Button,
    TextField,
} from "@material-ui/core";

function EditBook() {
    const match = useRouteMatch();
    console.log(match.params.id);
    const [name,setBooks] = useState('');
    const [author,setAuthor] = useState('');
    const [description,setDescription] = useState('');
    const [nxb,setNxb] = useState('');
    const handleChange = (e) => {
        let a = e.target.name;
        if(a=='name')
            setBooks(e.target.value);
        else if(a=='author')
            setAuthor(e.target.value);
        else if(a=='description')
            setDescription(e.target.value);
        else if(a=='nxb')
            setNxb(e.target.value);
        console.log(name,author,description,nxb);
    };

    const submitForm = (e) => {

        axios.
            put(`https://tientran-laravel-book.herokuapp.com/api/book/${match.params.id}`, {"namebook":name,"author":author,"description":description,"publication_date":nxb})
            .then((res) => {
                console.log(res.data);
            })
            .finally(() => {
                console.log("okle")
            })
    };
// const addBook= useAddBook();
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
                <form style={{ width: "50%" }} onSubmit={submitForm} >
                    <h1>Add Book Form</h1>
                    <TextField type="text" placeholder="NameBook"  fullWidth margin="normal" name="name" onChange={handleChange}/>
                    <TextField type="text" placeholder="Author"  fullWidth margin="normal" margin="normal" name="author" onChange={handleChange}/>
                    <TextField type="text" placeholder="Description"  fullWidth margin="normal" margin="normal" name="description" onChange={handleChange}/>
                    <TextField type="date" placeholder="NXB"  fullWidth margin="normal"margin="normal" name="nxb" onChange={handleChange}/>
                    <Button type="submit" variant="contained" color="primary" size="medium">
                        Save
                    </Button>
                </form>
            </div>
        </Main>
    );
}
export default EditBook;
