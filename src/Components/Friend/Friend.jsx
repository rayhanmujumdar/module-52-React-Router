import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend
    const nevigate = useNavigate()
    const showFriendDetail = () => {
        const path = `/friend/${id}`
        nevigate(path)
    }
    return (
        <div className='bg-slate-600 my-4 py-4 text-white w-96 m-auto rounded-md'>
           <div className='my-4'>
            <h1 className='text-2xl '>{name}</h1>
                <p>Email: {email}</p>
           </div>
           {/* <Link to={'/friend/' + id}>show Detail</Link> */}
            <button onClick={showFriendDetail} className='border-2 px-4 py-2 rounded-md hover:bg-black hover:border-black'>Details</button>
        </div>
    );
};

export default Friend;