
import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
const Login = () => {
    const { signIn, githubProviderLogin, googleProviderLogin } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGooogleSignIn = () => {

        googleProviderLogin()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubSignIn = () => {
        githubProviderLogin()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser);
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold"> Please Login</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </form>
                    <div className="form-control ">

                        <button onClick={handleGooogleSignIn} className="btn btn-outline btn-primary"> <FaGoogle></FaGoogle> Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-outline btn-secondary mt-1 "><FaGithub></FaGithub> Github</button>

                    </div>
                    <Link className='p-2 underline' to='/register'>Please register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;