import React from "react";
import axios from "axios";
const deleteBook = (id, callback) => {
  if (window.confirm(`bạn có muốn xóa hay không book có id = ${id}`)) {
    axios
      .delete(`https://tientran-laravel-book.herokuapp.com/api/book/${id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('auth-token') //the token is a variable which holds the token
        }
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // handle lỗi
        console.log(error);
      })
      .finally(() => {
        callback();
      });
  }
};
export default deleteBook;