import { useEffect, useState } from "react";
import axios from "axios";
function useBook1(id) {
    const [book1, setBooks] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/book/${id}`)
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

    }, []);
    return book1;
}
export default useBook1;