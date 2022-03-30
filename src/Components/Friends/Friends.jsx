// import { data } from 'autoprefixer';
import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setFriends] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(friends => setFriends(friends.data))
    },[])
    return (
        <div className='text-center'>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;