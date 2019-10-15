import React, {useRef} from 'react'

export default class LogIn extends React.Component {

    constructor(){

        //useRef hook returns mutable ref whose current property is initialised to the passed argument.

        const usernameRef = useRef();
        const passwordRed = useRef();

        const onSubmit = () => {
            axios.post('', {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            }), 
        }
    }

    render(){
        return (
            <form>
                <label>
                    username:
                    <input type ="text" name = "name"/>
                </label>
                <label>
                    password:
                    <input type ="text" name = "password"/>
                </label>
            </form>
        )
    }
}