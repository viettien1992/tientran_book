import { useEffect, useState } from "react";
import axios from "axios";
function useInfo() {
    const [user, setUser] = useState('');
    useState(() => {
        axios.get(`http://127.0.0.1:8000/api/user`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('auth-token') //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setUser(response.data.user.name);
            })
            .catch(function (error) {
                // handle lỗi
                console.log(error);
            })
    }, [])
    return user;
}
export default useInfo;