import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CousomLink/CoustomLink';

const Post = () => {
    const [posts,setPosts] = useState([]);
    const [errorMessage,setErrorMessage] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => setPosts(data.data))
        .catch(error => {
            error = 'Not Fond'
            setErrorMessage(error)
        })
    }, [])
    console.log(posts)
    return (
        <div>
            <div className='flex flex-wrap justify-center'>
                {
                    posts.map(post => <Link
                        className='underline m-1 hover:text-red-700 text-black' 
                        to={`/posts/${post.id}`}
                        key={post.id}
                        >{post.id}</Link>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Post;