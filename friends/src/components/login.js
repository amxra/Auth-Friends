import react from 'react'

export default class LogIn extends React.Component {
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