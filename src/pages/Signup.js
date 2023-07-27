import React from 'react';
import { Link } from 'react-router-dom';
import loginn from '../assets/img/loginn.png';
import UserService from '../services/user';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




const Signup = () => {

    const navigate = useNavigate();
    const registerHandler = (e) => {

        UserService.create({ FullName: e.target.FullName.value, email: e.target.email.value, password: e.target.password.value }).then((res) => {
            console.log(res.data);
            if (res.data.status === "success") {
                toast.success("Registered Successfully");
                navigate('/');
            }
            else {
                toast.error("Failed to Register");
            }
        }
        );
    }

    return (
        <>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">


                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl h-full" src={loginn} alt='signup'></img>
                    </div>
                    <div className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-center text-2xl text-[#1b95e0]">Register</h2>
                        <p className="text-lg mt-4 text-[#1b95e0]">Please Fill the information bellow</p>

                        <form action="" className="flex flex-col gap-4">
                            <input className="p-2 mt-8 rounded-xl border" type="text" name="FullName" placeholder="FullName"></input>
                            <input className="p-2 mt-2 rounded-xl border" type="email" name="email" placeholder="Email"></input>
                            <div className="relative">
                                <input className="p-2 mt-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"></input>

                            </div>
                            <div className="relative">
                                <input className="p-2 mt-2 rounded-xl border w-full" type="password" name="password" placeholder="Comfirm Password"></input>
                            </div>
                            {/* onClick={registerHandler} */}
                            <Link className="bg-[#1b95e0] rounded-xl text-white py-2 hover:scale-105 duration-300 text-center"  to="/">Register</Link>
                        </form>
                        <form action="login.html">
                            <div className="mt-3 text-sm flex justify-between items-center text-[#1b95e0]">
                                <p className="mr-1">Already have an account?</p>
                                <Link className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" to="/login">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </>

    );
};
export default Signup;