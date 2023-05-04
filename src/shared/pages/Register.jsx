import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault()
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setSuccess('User has created successfully')
                setError('')

            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold">Please Register</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                        </div>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <button>Already have an Account?<Link to='/login'>Login</Link></button>
                    </form>
                    <p>{error}</p>
                    <p>{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;