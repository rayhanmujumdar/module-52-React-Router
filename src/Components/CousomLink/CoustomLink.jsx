import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import {CheckCircleIcon} from '@heroicons/react/solid'
function CustomLink({className, children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    console.log(className)
    return (
      <div className='flex items-center justify-center'>
        <Link
          style={{color: match ? '#11998e': 'white'}}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {
          match && <CheckCircleIcon className='text-green-600 w-6 h-6 mx-2'></CheckCircleIcon>
        }
      </div>
    );
  };

export default CustomLink;