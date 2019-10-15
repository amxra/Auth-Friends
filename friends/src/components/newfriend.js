import React from 'react';
import { Formik, Form, Field } from 'formik';
import AxiosAuth from '../axiosauth';

const initialFriendValues = {
    name: '',
    age: '',
    email: ''
}

export default function NewFriend (props) {

    const addFriend = (formValues, actions) => {
        AxiosAuth().post('http://localhost:5000/api/friends/', {
            id: Date.now(),
            name: formValues.name,
            age: formValues.age,
            email: formValues.email,
        })
            .then(res => {
                console.log(res);
                props.history.push('/friendList');
            })
            .catch(err => {
                console.log(err.response.data.error)
                alert(err.response.data.error)
            })
        actions.resetForm();
    }

    return (
        <div>
            <FriendForm onAdd={addFriend}/>
        </div>
    );
}

function FriendForm ({onAdd}) {
    return(
        <Formik 
            initialValues={initialFriendValues}
            onSubmit={onAdd}
            render = { props => {
                return (
                    <Form>
                        <label>Name</label>
                        <Field name="name" type="text" placeholder="Enter name"/>
                        <br />
                        <label>Age</label>
                        <Field name="age" type="text" placeholder="Enter Age"/>
                        <br />
                        <label>Email</label>
                        <Field name="email" type="text" placeholder="Enter email"/>
                        <br />
                        <button type="submit">Add Friend</button>
                    </Form>
                )
            }}
        />
    );
} 