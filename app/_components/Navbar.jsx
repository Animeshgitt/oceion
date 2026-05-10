

'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5"; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full h-18 flex z-50 justify-center items-center bg-navy shadow-xl/10">
                <div className="w-[90%] flex justify-between items-center display-text">
                    <div>
                        <Link href="/" className="nav-logo flex items-center">
                            <div className="nav-logo-mark">
                                
                                    <Image src="/logo.png" alt="OCEION Logo" width={30} height={30} />
                                
                            </div>
                            <span className="nav-logo-text text-white">OCEION</span>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex">
                        <ul className="nav-links flex gap-x-8 text-white">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                    
                            <li><Link href="/services">Services</Link></li>

                            <li><Link href="/#form-fill">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="flex items-center   hover:border ">
                        {/* Hamburger Button */}
                        <button 
                            className="lg:hidden text-white cursor-pointer p-2 z-[60] hover:bg-blue-800" 
                            onClick={() => setMenuOpen(true)}
                        >
                            <CiMenuFries size={30} />
                        </button>
                        <Link className="nav-cta hidden lg:flex " href="/#form-fill">Get Consultation</Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-navy z-[100] flex flex-col justify-center items-center gap-y-8 text-3xl 
            display-text 
            text-white transition-transform duration-500 ease-in-out
             transform ${ menuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
                {/* Close Button inside Menu */}
                <button 
                    className="absolute top-8 right-[5%] text-white cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    <IoClose size={40} />
                </button>

                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                <Link href="/#form-fill" onClick={() => setMenuOpen(false)}>Contact</Link>
                <Link href="/#form-fill" onClick={() => setMenuOpen(false)}>Book Consultation</Link>
            </div>
        </>
    );
}

export default Navbar;