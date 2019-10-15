import React from 'react';

export default function FriendCard ({friend, deleteFriend, editFriend}) {
    return(
        <div>
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    );
}