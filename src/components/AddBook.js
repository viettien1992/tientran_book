import React from "react";
import Main from "../layouts/Main";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";

function AddBook() {
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
        <h1>Add Book Form</h1>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="Name">NameBook</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Author</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Description</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">NXB</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
        <Button variant="contained" color="primary" size="medium">
          Send
        </Button>
      </form>
    </div>
    </Main>
  );
}

export default AddBook;
