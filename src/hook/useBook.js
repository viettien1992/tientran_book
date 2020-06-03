import {useEffect, useState} from "react";
import axios from "axios";
function useBook(props) {
    const [book,setBooks] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    useState(() => {
        setIsLoading(true)
        const { id } =props.match.params;
        console.log(id);
        console.log("get api");
        axios.get(`https://tientran-laravel-book.herokuapp.com/api/book/${id}`)
            .then(function (response) {
                // handle việc lấy dữ liệu thành công
                setBooks(
                    response.data
                )
                console.log(1);
            })
            .catch(function (error) {
                // handle lỗi
                console.log(error);
            })
            .finally(()=>{
                setIsLoading(
                    false
                );
            })

    },[props.match.params]);
    return [book,isLoading];
}
export default useBook;