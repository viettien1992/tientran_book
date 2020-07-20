import React, { useState, useEffect } from "react";
import axios from "axios";
function countBook() {
    const [count, Setcount] = useState('');
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/book/count", {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('auth-token') //the token is a variable which holds the token
                }
            })
            .then(response => Setcount(response.data));
    }, []);
    return count;
}
export default countBook;