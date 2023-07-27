import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginn from '../assets/img/loginn.png';
import UserService from '../services/user';
import { toast } from 'react-toastify';





const Login = () => {

    // export const AuthContext = useContext();

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const loginHandler = (e) => {
        e.preventDefault();
        UserService.authenticate({ email: e.target.email.value, password: e.target.password.value }).then((res) => {
            console.log(res.data);
            if (res.data.status === "success") {
                setLoggedIn(true);
                localStorage.setItem('loggedIn', true);
                navigate('/');
            }
            else {
                toast.error("Invalid Credentials");
            }
        });
    }
    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
        console.log(loggedIn);
    }, loggedIn);
    return (
        <>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">

                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

                    <div className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-center text-2xl text-[#1b95e0]">Login</h2>
                        <p className="text-lg mt-4 text-[#1b95e0]">Please enter your Email & Password</p>

                        <form action="" className="flex flex-col gap-4">
                            <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email"></input>
                            <div className="relative">
                                <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"></input>

                            </div>
                            
                            <Link className="bg-[#1b95e0] rounded-xl text-white py-2 hover:scale-105 duration-300 text-center" to="/">Login</Link>
                        </form>


                        <div className="mt-5 text-sm border-b border-[#1b95e0] py-4 text-[#1b95e0]">
                            <a>Forgot your password?</a>
                        </div>

                        <form action="register.html">
                            <div className="mt-3 text-sm flex justify-between items-center text-[#1b95e0]">
                                <p>Don't have an account?</p>
                                <Link to="/signup" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</Link>
                            </div>
                        </form>
                    </div>


                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl h-full" src={loginn}></img>
                    </div>
                </div>
            </section >
        </>

    );
};
export default Login;