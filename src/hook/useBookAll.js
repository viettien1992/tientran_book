import { useEffect, useState } from "react";
import axios from "axios";
function useBookAll() {
  // lây ra 1 cái state thay đổi lưu lại trạng thai của 1 biến minh sẽ thay đổi qua cái SetBook
  const [books, setBooks] = useState([]);
  //
  function fetchBooks() {
    axios
      .get("https://tientran-laravel-book.herokuapp.com/api/book")
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
