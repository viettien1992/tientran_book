import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Main from "../layouts/Main";
import { useRouteMatch } from "react-router-dom";
import useBook1 from "../hook/useBook1";
import {
    Button,
    TextField,
} from "@material-ui/core";
function EditBook(props) {
    const { book1,getbook} = useBook1("");
  useEffect(() => {
    getbook(props);
    console.log(book1);
  },[]);

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
                <form style={{ width: "50%" }}>
                    <h1>Edit Book Form</h1>
                    <TextField type="text" placeholder="NameBook"  fullWidth margin="normal" name="name" />
                    <TextField type="text" placeholder="Author"  fullWidth margin="normal" margin="normal" name="author" />
                    <TextField type="text" placeholder="Description"  fullWidth margin="normal" margin="normal" name="description" />
                    <TextField type="date" placeholder="NXB"  fullWidth margin="normal"margin="normal" name="nxb" />
                    <Button type="submit" variant="contained" color="primary" size="medium">
                        Save
                    </Button>
                </form>
            </div>
        </Main>
    );
}
export default EditBook;
