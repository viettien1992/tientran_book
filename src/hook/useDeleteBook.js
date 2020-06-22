import React from "react";
import axios from "axios";
const deleteBook = (id, callback) => {
  if (window.confirm(`bạn có muốn xóa hay không book có id = ${id}`)) {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/book/${id}`)
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