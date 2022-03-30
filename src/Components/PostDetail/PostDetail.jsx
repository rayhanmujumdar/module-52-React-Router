import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const PostDetail = () => {
    const {PostsId} = useParams();
    const [detailPost,setDetailPost] = useState({})
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${PostsId}`
        axios.get(url)
        .then(data => setDetailPost(data.data))
    },[PostsId])
    const {title,body} = detailPost
    return (
        <div className=' bg-slate-700 w-3/4 p-4 text-white text-center mx-auto my-5 rounded-md'>
            <h1 className='text-4xl'>hello brother: {PostsId}</h1>
            <p className='my-3 text-2xl'><span className='font-bold text-green-700 '>Title:</span> {title}</p>
            <p><span className='font-bold text-red-700'>post:</span> {body}</p>
        </div>
    );
};

export default PostDetail;