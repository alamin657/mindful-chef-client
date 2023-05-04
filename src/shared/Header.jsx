import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar md:bg-slate-300 bg-slate-300">
            <div className="navbar-start   md:ml-72 ml-4">
                <a className=" text-xl text-orange-500">Mindful Chef</a>
            </div>
            <div className="md:navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">
                    <li><NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "text-red-500"
                        }>Home</NavLink></li>
                    <li><NavLink to="/blog"
                        className={({ isActive }) =>
                            isActive ? "active" : "text-red-500"
                        }>Blog</NavLink></li>
                    <li><NavLink to="/register"
                        className={({ isActive }) =>
                            isActive ? "active" : "text-red-500"
                        }>Register</NavLink></li>
                    <li><NavLink to="/login"
                        className={({ isActive }) =>
                            isActive ? "active" : "text-red-500"
                        }>Login</NavLink></li>
                </ul>
            </div>
            <div className="md:hidden dropdown">
                <label tabIndex={0} className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "text-red-500"
                        }>Home</NavLink></li>
                    <li><NavLink to="/blog"
                        className={({ isActive }) =>
                            isActive ? "active" : "text-red-500"
                        }>Blog</NavLink></li>
                    <li><NavLink to="/register"
                        className={({ isActive }) =>
                            isActive ? "active" : "text-red-500"
                        }>Register</NavLink></li>
                    <li><NavLink to="/login"
                        className={({ isActive }) =>
                            isActive ? "active" : "text-red-500"
                        }>Login</NavLink></li>
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