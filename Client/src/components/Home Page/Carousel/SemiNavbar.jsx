import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SemiNavbar = () => {
    const navLinks = [
        { name: 'Destination', path: '/' },
        { name: 'Meeting', path: '/' },
        { name: 'Weddings', path: '/' },
        { name: 'Sleep Bounqute', path: '/' },
        { name: 'News & Upcoming Events', path: '/' },
        { name: 'Contacts', path: '/contact' },
    ];

    return (
        <div className='w-full absolute top-0 right-0 z-20 bg-transparent p-3 hover:bg-white text-white hover:text-black transition-all duration-300 ease-in-out'>
            <div className='flex flex-wrap items-center justify-center md:justify-end gap-4'>
                <ul className='flex flex-wrap items-center justify-center gap-4 md:gap-6'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path} className='hover:text-gray-400 transition-colors text-sm lg:text-base'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <FaUser className='hidden md:block text-xl' />
            </div>
        </div>
    );
};

export default SemiNavbar;
