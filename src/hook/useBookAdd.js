import { useEffect, useState } from "react";
import axios from "axios";
function useAddBook() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/api/book/`, { "test": 1, "demo": 2 }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('auth-token') //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data);
                // handle việc lấy dữ liệu thành công
                setBooks(
                    response.data
                )
            })
            .catch(function (error) {
                // handle lỗi
                console.log(error);
                window.location = '/login'
            })

    });
    return books;
};
export default useAddBook;