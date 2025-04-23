import React, { useState, useEffect } from 'react';
import logo from '../assets/image/svg/logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <nav className='mb-173 bg-black'>
            <div className="max-w-[1140px] px-4 mx-auto">
                <div className="flex justify-between items-center py-[17px]">
                    <div className="flex items-center gap-3.5">
                        <a href="#"><img src={logo} alt="nav-logo" className='max-w-[50px] sm:max-w-[98px]' /></a>
                        <a className='font-family-primary font-bold text-4xl leading-[135%] text-[#2C49FE] mb-0' href='#'>Events<span className='text-[#01C8FF]'>Free</span></a>
                    </div>
                    <div onClick={toggleNavbar} className="z-50 lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer">
                        <span className={`block h-0.5 bg-black ${menuOpen ? 'rotate-45' : ''}`}></span>
                        <span className={`block h-0.5 bg-black ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 bg-black ${menuOpen ? 'rotate-45' : ''}`}></span>
                    </div>
                    <ul id='nav-name' className={`list-unstyled flex justify-center items-center nav-link gap-[60px] mb-0 ${menuOpen ? "show-navbar" : ""}`}>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] text-white hover:font-semibold' href="#">HOME</a></li>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] text-white hover:font-semibold' href="#">EVENTS</a></li>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] text-white hover:font-semibold' href="#">FEED</a></li>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] text-white hover:font-semibold' href="#">USER NAME</a></li>
                        <li><button className='font-family-primary text-white cursor-pointer'>Log Out</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;