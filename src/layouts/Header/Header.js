import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';

const Header = () => {
    const { user, logOut } = useContext(UserContext)

    const handelSignOut = () => {
        logOut()
    }
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-bold text-secondary'>
                            <Link to="/home">Home</Link>
                        </li>
                        <li className='font-bold text-secondary'>
                            <Link to="/orders">Orders</Link>
                        </li>
                        <li className='font-bold text-secondary'>
                            <Link to="/login">Log In</Link>
                        </li>
                        <li className='font-bold text-secondary'>
                            <Link to="/registration">Registration</Link>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold text-white'>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className='font-bold text-white'>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li className='font-bold text-white'>
                        <Link to="/registration">Registration</Link>
                    </li>
                    {/* <li className='font-bold text-white'>
                        <Link to="/login">Log In</Link>
                    </li> */}
                    {
                        user ?
                            <li className='font-bold text-white'>
                                <button>Log Out</button>
                            </li>
                            : <li className='font-bold text-white'>
                                <Link to="/login">Log In</Link>
                            </li>

                    }


                </ul>

                {
                    user && <p className='font-semibold text-white'>{user.displayName}</p>
                }

            </div>
            <div className="navbar-end">

                <button onClick={handelSignOut} className="btn">Log Out</button>
            </div>
        </div>
    );
};

export default Header;