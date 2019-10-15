import React, { useRef } from 'react'
import axios from 'axios';


export default function LogIn (props) {

    const passwordRef = useRef();
    const usernameRef = useRef();

    const onSubmit = () => {
        axios.post('http:5000/api/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
        .then(res =>{
            localStorage.setItem('token', res.data.token) // put token string in local storage 
            props.history.push('/friendList')
        })
        .catch(error =>{
            alert(error.response.data.error)
        })
    }



    return(
        <div className = 'form'>
            <form>
                <label>
                    Username:
                    <input type = "text" name = "name" ref={usernameRef}/>
                </label>
                <label>
                    Password:
                    <input type = "password" name = "password" ref={passwordRef}/>
                </label>
                <button onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}
