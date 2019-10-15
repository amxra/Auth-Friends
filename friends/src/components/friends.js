import React, {useState, useEffect}from 'react';
import axios from 'axios'
import AxiosAuth from '../axiosauth';
import Friend from './friend'


export default function  () {
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        AxiosAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return(
        <div className = 'friends'>
             {
                friends.map(friend => <Friend key={friend.id} friend={friend} /> )
            }
        </div>
    )
}