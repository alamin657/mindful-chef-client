import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-400 mt-2'>
            <div>
                <h2 className='text-center underline text-red-600'>Food & Wine</h2>
            </div>
            <div className='text-center space-x-3 text-white'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link>About</Link>
                <Link>Contact us</Link>
            </div>
            <h4 className='text-center'>Mindful Chef © 2023 - Designed by Cute Themes.</h4>
        </div>
    );
};

export default Footer;