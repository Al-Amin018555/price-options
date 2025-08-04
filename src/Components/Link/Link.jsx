import React from 'react';

const Link = ({route}) => {
    const {path,name} = route
    return (
        <li className='mr-10 hover:bg-yellow-600 px-5'>
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;