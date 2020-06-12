import {useState} from "react";
import axios from "axios";
function useBook1(props) {
    const [book1,setBooks] = useState([]);
    function getbook(props){
        const { id } =props.match.params;
        axios.get(`https://tientran-laravel-book.herokuapp.com/api/book/${id}`)
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

    };
    return {book1,getbook};
}
export default useBook1;