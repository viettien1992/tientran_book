import React, {useEffect, useState} from "react";
import axios from "axios";

function BookAll() {
    const [books,setBooks] = useState([]);
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

    return (
        <table style={{width:"100%"}}>
            <tbody>
            <tr>
                <th>id</th>
                <th>namebook</th>
                <th>author</th>
                <th>description</th>
                <th>publication_date</th>
            </tr>

            {
                books.map((post, index) =>
                    <tr key={index}>
                        <th>{ post.id} </th>
                        <th><a href={"http://localhost:3000/book/"+post.id}>{ post.namebook}</a></th>
                        <th>{ post.author} </th>
                        <th>{ post.description} </th>
                        <th>{ post.publication_date} </th>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}
export default BookAll;