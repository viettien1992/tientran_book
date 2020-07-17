import React, { useState, useEffect } from "react";
import axios from "axios";
function countBook() {
    const [count, Setcount] = useState('');
    useEffect(() => {
        axios
            .get("https://tientran-laravel-book.herokuapp.com/api/book/count", {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('auth-token') //the token is a variable which holds the token
                }
            })
            .then(response => Setcount(response.data));
    }, []);
    return count;
}
export default countBook;