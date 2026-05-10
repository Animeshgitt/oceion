'use client'
import React from "react";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";

import Modal from "./Modal";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
    };
  return (
<>

    <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book a Free Consultation"
      >
      </Modal>
<footer className="bg-navy mons-font ">
    <div className="mx-auto w-[90%] lg:w-[80%] p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center hover:underline">
              <Image src="/logo.png" alt="logo" width="30" height="30"/>
                  <span className="text-heading less-spacing self-center text-2xl 
                  font-semibold text-bright whitespace-nowrap uppercase">Oceion</span>
              </Link>
              <p className="text-light text-xs p-1 mb-5">Compliance Beyond the Surface.<br/>
                    Privacy advisory, information security, 
                    regulatory compliance, and education — delivered with depth.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm less-spacing font-semibold text-heading text-light uppercase">Services</h2>
                  <ul className="text-body font-medium list-disc">
                      <li className="">
                          <a href="#" className="hover:underline">Data Privacy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Information Security</a>
                      </li>
                    <li>
                          <a href="#" className="hover:underline">Regulatory Compliance</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Risk & Audits</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Policy Drafting</a>
                      </li>

                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm less-spacing font-semibold text-heading text-light uppercase">Company</h2>
                  <ul className="text-body font-medium list-disc">
                      <li className="">
                          <Link href="/about" className="hover:underline ">About Us</Link>
                      </li>
                      <li className="">
                          <Link href="/services" className="hover:underline ">Services</Link>
                      </li>
                      <li>
                          <Link href="/#form-fill" className="hover:underline">Contact</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm less-spacing font-semibold text-heading text-light uppercase">Contact</h2>
                  <ul className="text-body font-medium list-disc">
                      <li className="">
                          <a href="#" className="hover:underline">hr@oceion.com</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">New Delhi, India</a>
                      </li>
                      <li className="text-light font-bold">
                          <a href="#" onClick={()=>{
                            openModal();
                          }} className="hover:underline">Book Consultation</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-default sm:mx-auto lg:my-8 " />
      <div className="sm:flex sm:items-center sm:justify-between ">
          <span className="text-sm text-body sm:text-center">© 2026 
            <Link href="https://oceion.co/" className="hover:underline"> Oceion™ . <span className="serif">Compliance Beyond the Surface</span></Link>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-body hover:text-heading ">
                <FaLinkedinIn className="text-xl text-white"/>
                <span className="sr-only">Linkedin page</span>
            </a>
            
            <a href="#" className="text-body hover:text-heading ms-5">
                <FaGoogle className="text-xl text-white"/>
            <span className="sr-only">Twitter page</span>
            </a>
            
          </div>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-body hover:text-heading ">
               <p className="text-sm text-slate-400">Privacy Policy </p>
                
            </a>
            
            <a href="#" className="text-body hover:text-heading ms-5">
            <p className="text-sm text-slate-400"> Terms of Use </p>
            </a>
            
          </div>
      </div>
    </div>
</footer>

</>
  )

}

export default Footer;