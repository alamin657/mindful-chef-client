import React from 'react';

const Header = () => {
    return (
        <div className="navbar  mx-auto">
            <div className="navbar-center md:hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Mindful Chef</a></li>
                    <li><a>Home</a></li>
                    <li><a>Blog</a></li>
                    <div>
                        <img className="rounded-full w-8" src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;