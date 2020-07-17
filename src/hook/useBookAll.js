import { useEffect, useState } from "react";
import axios from "axios";
function useBookAll() {
  // lây ra 1 cái state thay đổi lưu lại trạng thai của 1 biến minh sẽ thay đổi qua cái SetBook
  const [books, setBooks] = useState([]);
  //
  function fetchBooks(page, limit) {
    axios
      .get(`http://127.0.0.1:8000/api/book?page=${page}&&limit=${limit}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('auth-token') //the token is a variable which holds the token
        }
      })
      .then(function (response) {
        // handle việc lấy dữ liệu thành công
        setBooks(response.data);
      })
      .catch(function (error) {
        // handle lỗi
        console.log(error);
      });
  }
  return {
    books,
    fetchBooks,
  };
}
export default useBookAll;
