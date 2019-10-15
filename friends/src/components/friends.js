import React,{ useState, useEffect } from 'react';
import AxiosAuth from '../axiosauth';
import Friend from './friend'

export default function FriendList () {
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        AxiosAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                //console.log(res.data);
                setFriends(res.data);
            })
            .catch(err => {
                //console.log(err.response.data.error);
                alert(err.response.data.error)
            })
    }, [])

    function deleteFriend (id) {
        AxiosAuth().delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            //console.log(res.data)
            // const remainingFriends = friends.filter(friend => friend.id !== id)
            // setFriends(remainingFriends)
            setFriends(res.data)
        })
        .catch(err => {
            //console.log(err)
        })
    }

    function editFriend (id) {
        AxiosAuth().put(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
   
    return(
        <div>
            { 
                friends.map(friend => <Friend key={friend.id} friend={friend} deleteFriend={deleteFriend} editFriend={editFriend}/> )
            }
        </div>
    );
}