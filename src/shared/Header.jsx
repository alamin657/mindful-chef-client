import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="navbar">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Mindful Chef</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <img className="rounded-full w-8 mr-1" src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                }

                {
                    user ? <button className="btn btn-active">SignUp</button> :
                        <Link to='/login'><button className="btn btn-active">SignIn</button></Link>
                }

            </div>
        </div>
    );
};

export default Header;