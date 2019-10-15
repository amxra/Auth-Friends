import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialFriendValues = {
    name: '',
    age: '',
    email: ''
}

export default function NewFriend () {
    return(
        <Formik 
            initialValues={initialFriendValues}
            onsubmit={onAdd}
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
                        <button type={submit}>Add Friend</button>
                    </Form>
                )
            }}
        />
    );
}