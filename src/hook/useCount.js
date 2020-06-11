import { useEffect, useState } from "react";
import axios from "axios";
function countBook() {
    const [count,setCount] = useState([]);
    useEffect(() => {
        axios.get(`https://tientran-laravel-book.herokuapp.com/api/book/count`)
            .then(function (response) {
                // handle việc lấy dữ liệu thành công
                setCount(
                    response.data
                )
            })
            .catch(function (error) {
                // handle lỗi
                console.log(error);
            })

    },[]);
    return count;
};
export default countBook;