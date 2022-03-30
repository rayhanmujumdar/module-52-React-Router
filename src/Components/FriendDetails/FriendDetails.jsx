import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {detailId} = useParams();
    const [friend,setFriend] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState('')
    const {name,email,address,phone} = friend
    
    useEffect(() => {
        setIsLoading(true)
        const url = `https://jsonplaceholder.typicode.com/users/${detailId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setFriend(data)
            setIsLoading(false)
        })
        .catch(error => {
            error = 'not found'
            setErrorMessage(error)
            setIsLoading(false)
        })
    },[])
    const renderUser = (
        <div className='text-center bg-slate-500 w-2/4 m-auto text-white py-9 my-6 rounded-md'>
            <p>{isLoading}</p>
            <h1 className='text-3xl'>This is your Details bondhu: {detailId}</h1>
            <h1 className='text-4xl my-2'>{name}</h1>
            <p className='text-xl'>Email:{email}</p>
            <p>Adress: {address?.city}</p>
            <p>Phone: {phone}</p>
        </div>
    );
    return(
        <div>
            {
                isLoading ? <div className='absolute top-2/4 left-2/4'><TailSpin></TailSpin></div>: <div className={`${errorMessage ? 'hidden': 'block'}`}>{renderUser}</div>
            }
            {
                errorMessage && <div className='text-6xl text-center text-red-800'>{errorMessage}</div>
            }
        </div>
    )
};

export default FriendDetails;