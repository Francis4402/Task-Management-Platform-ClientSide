import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import useAuth from "../Hooks/useAuth.jsx";
import {Link, useLocation, useNavigate} from "react-router-dom";
import useAxiosPublic from "../AxiosFiles/useAxiosPublic.jsx";

const Logins = () => {

    const [showPassword, setShowPassword] = useState(false);
    const {user, signInUser, signinwithGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleloginwithpass = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        signInUser(email, password)
            .then((res) => {
                const loggedInUser = res.user;
                console.log(loggedInUser)
                const user = {email};
                axiosPublic.post('/jwt', user, {withCredentials: true})
                    .then(res => {
                        if(res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
                toast.success('Login Successful')
            })
            .catch((error) => {
                console.error(error)
                toast.error('Email or password is incorrect')
            })
    }

    const handlegooglesignin = () => {
        signinwithGoogle()
            .then(() => {
                axiosPublic.post('/jwt', user, {withCredentials: true})
                    .then(res => {
                        if(res.data.success){
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
                toast.success('Login Successful')
            })
            .catch((error) => {
                console.error(error)
                toast.error('Check Your Email')
            })
    }

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="h-[600px] hero bg-base-100">
                <div className="hero-content p-2 flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                        <div className="card-body">

                            <form onSubmit={handleloginwithpass}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <div className="flex gap-3">
                                        <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />


                                        <span onClick={() => setShowPassword(!showPassword)} className='btn'>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                                    </div>
                                    <label className="label">
                                        <button className="label-text-alt link link-hover">Forgot password?</button>
                                    </label>

                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-outline">Login</button>
                                </div>
                            </form>

                            <div>
                                <div className="flex gap-2 items-center">
                                    <p className="md:text-base text-sm">New To Website register now?</p>
                                    <Link className="btn btn-link" to='/register'><button>Register</button></Link>
                                </div>
                                <button onClick={handlegooglesignin} className="btn btn-outline mt-3">Google Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logins
