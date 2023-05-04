import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start">
                <a className=" text-xl text-orange-500">Mindful Chef</a>
            </div>
            <div className="navbar-center md:hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">
                    <li><Link
                        to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <img
                        title={user?.displayName} className="rounded-full w-8 mr-1" src={user?.photoURL} />
                }

                {
                    user ? <button onClick={handleLogout} className="btn btn-active">SignOut</button> :
                        <Link to='/login'><button className="btn btn-active">SignIn</button></Link>
                }

            </div>
        </div>
    );
};

export default Header;