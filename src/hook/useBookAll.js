import {useEffect, useState} from "react";
import axios from "axios";
function useBookAll() {
        const [books, setBooks] = useState([]);
        useEffect(() => {
            axios.get('https://tientran-laravel-book.herokuapp.com/api/book')
                .then(function (response) {
                    // handle việc lấy dữ liệu thành công
                    setBooks(
                        response.data
                    )
                })
                .catch(function (error) {
                    // handle lỗi
                    console.log(error);
                })
        });
        return books;
}
export default useBookAll;