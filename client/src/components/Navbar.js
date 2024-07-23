// src/components/Navbar.js
import React, { useState } from 'react';
import navLogo from '../assets/images/jcciNavbarLogo.png'
import { Link } from 'react-router-dom';
import { Data } from './Data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* <nav className='bg-white flex justify-between rounded-t-3xl'>
                <div>
                    <a >
                        <img src={navLogo} />
                    </a>
                </div>
                <button>
                    <img src='' />
                </button>

            </nav> */}

            {/* 
            #######################################3
            #######################################3
            #######################################3 */}


            <nav className="bg-white p-4 rounded-t-3xl">
                <div className='flex justify-between md:py-10 md:px-16'>


                    <div className="flex justify-end md:justify-center">

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleNavbar}
                                className="text-white focus:outline-none focus:text-white"
                            >
                                {isOpen ? (
                                    <svg
                                        className="h-6 w-6 fill-mainBlue"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.293 6.293a1 1 0 010 1.414L7.414 19.293a1 1 0 01-1.414 0L2.293 16.707a1 1 0 010-1.414L14.586 2.293a1 1 0 011.414 0L19.293 6.293z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6 fill-mainBlue"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm-1 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 100 2h14a1 1 0 100-2H4z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Desktop menu */}
                        <div className={`md:flex justify-center  items-center gap-20 ${isOpen ? 'hidden' : 'block'}`}>

                            <div className=' flex justify-center gap-4'>
                                <button className='bg-darkGray hidden md:block text-black font-bold rounded-md px-4 py-2'>دخول</button>
                                <button className='bg-mainBlue hidden md:block text-white font-bold rounded-md px-4 py-2'>تسجيل دخول</button>
                            </div>

                            {/* The Test Will Be Here */}
                            <div className='flex gap-10 flex-row-reverse'>
                                {Data.map((item) => (

                                    <Link
                                        to={item.link}
                                        className="hover:underline underline-offset-8 hidden md:block text-[#676d79] font-bold hover:text-gray-300 transition duration-300"
                                    >
                                        {item.title}
                                    </Link>
                                ))}

                            </div>

                        </div>

                    </div>

                    <a href='/' className='w-36 md:w-48 mt-2'>
                        <img alt='logo' className=' ' src={navLogo} />
                    </a>

                </div>

                {/* Mobile dropdown menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <ul className="text-black text-right">
                            {Data.map((d) => (
                                <li>
                                    <Link
                                        to="/"
                                        className="block py-2 px-4 hover:bg-[#3A8B6E]"
                                        onClick={toggleNavbar}
                                    >
                                        {d.title}
                                    </Link>
                                </li>
                            ))}


                        </ul>
                        <div className=' flex flex-col items-end w-full  gap-4 px-4'>
                            <button className='bg-mainBlue text-white font-bold rounded-md px-4 py-2'>تسجيل دخول</button>
                            <button className='bg-darkGray  text-black font-bold rounded-md px-4 py-2'>دخول</button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;