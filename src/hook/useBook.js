import { useEffect, useState } from "react";
import axios from "axios";
function useBook(props) {
    const [book, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useState(() => {
        setIsLoading(true)
        const { id } = props.match.params;
        axios.get(`http://127.0.0.1:8000/api/book/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('auth-token') //the token is a variable which holds the token
            }
        })
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
            .finally(() => {
                setIsLoading(
                    false
                );
            })

    }, [props.match.params]);
    return [book, isLoading];
}
export default useBook;