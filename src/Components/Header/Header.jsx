import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import CustomLink from '../CousomLink/CoustomLink';

const Header = () => {
    const [open,setOpen] = useState(false);
    const menuIcon = (open) => {
        setOpen(open)
    }
    return (
        <div className=''>
            <h1 className='text-center text-4xl my-3'>Welcome to my React Router</h1>
            <div onClick={() => menuIcon(!open)} className='md:hidden w-6 absolute top-0'>
                {
                    open ? <XIcon></XIcon>:<MenuIcon></MenuIcon>
                }
            </div>
                <ul className={`w-full bg-slate-700 py-4 md:flex justify-center items-center duration-500 md:static absolute ${open ? 'top-12': 'top-[-300px]'}`}>
                    <li className='text-2xl mx-2'><CustomLink className='text-white hover:text-red-700' to={'/'}>Home</CustomLink></li>
                    <li className='text-2xl mx-2'><CustomLink className='text-white hover:text-red-700' to={'/about'}>About</CustomLink></li>
                    <li className='text-2xl mx-2'><CustomLink className='text-white hover:text-red-700' to={'/friends'}>Friends</CustomLink></li>
                    <li className='text-2xl mx-2'><CustomLink className='text-white hover:text-red-700' to={'/posts'}>Posts</CustomLink></li>
                </ul>
        </div>
    );
};

export default Header;