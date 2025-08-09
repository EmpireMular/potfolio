import React from 'react';
import Link from "next/link";
import { FaDribbble, FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { GrTechnology } from 'react-icons/gr';
import Image from "next/image"

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#1a1a1a] '>
        <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
        lg:grid-cols-4 gap-10">
            {/* 1st part */}
            <div>
                <div className="flex items-center space-x-2">
                    <Link className="cursor-pointer" href="/">
                        <Image priority src="/logo/logo.svg" alt="logo" width={100} height={100} className="w-10 md:w-14 md:h-14" />
                    </Link>
                    <h1 className='text-x1 hidden mx-10 sm:block md:text-2xl text-white font-bold'>ApexCode</h1>
                </div>
                <p className='mt-4 text-gray-200 font-medium'>
                   Custom tailored solutions for your business.We are a team of
                    creatives who are excited to help you grow your business.
                </p>
                {/* social links */}
                <div className="mt-6 flex items-center space-x-2">
                    <div className="flex items-center justify-center flex-col w-8 h-8 bg-blue-600 text-white
                    rounded-full">
                        <Link href={"https://Facebook.com/"}>
                            <FaFacebookF/>
                        </Link>
                    </div>
                     <div className="flex items-center justify-center flex-col w-8 h-8 bg-pink-500 text-white
                    rounded-full">
                        <Link href={"https://Instagram.com/"}>
                            <FaInstagram/>
                        </Link>    
                    </div>
                     <div className="flex items-center justify-center flex-col w-8 h-8 bg-sky-400 text-white
                    rounded-full">
                        <Link href={"https://X.com/"}>   
                            <FaTwitter/>
                        </Link>    
                    </div>
                     <div className="flex items-center justify-center flex-col w-8 h-8 bg-red-600 text-white
                    rounded-full">
                        <Link href={"https://Youtube.com/"}>
                            <FaYoutube/>
                        </Link>    
                    </div>
                </div>
            </div>
            {/* 2nd part */}
            <div className="space-y-5 flex flex-col">
                <h1 className='text-lg font-bold text-white'>Service</h1>
                <Link href="/" className="text-neutral-50 mb-30">
                    Website Design
                </Link>
                <Link href="/" className="text-neutral-50 mb-30">
                    Graphic Design
                </Link>
                <Link href="/" className="text-neutral-50 mb-30">
                    Shopify Stores
                </Link>
                <Link href="/" className="text-neutral-50 mb-30">
                    Brands
                </Link>
            </div>
            {/* 3rd part */}
            <div className="space-y-5 flex flex-col">
                <h1 className='text-lg font-bold text-white'>Resources</h1>
                <Link href="/pricing" className="text-neutral-50 mb-30">
                    Pricing
                </Link>
                <Link href="/contact" className="text-neutral-50 mb-30">
                    Contact
                </Link>
                <Link href="/book" className="text-neutral-50 mb-30">
                    Book a Call
                </Link>
                
            </div>
            {/* 4th part */}
            <div>
                <h1 className='text-lg font-bold text-white'>Contact Us</h1>
                <div className="mt-6">
                    <h1 className='text-sm text-white'>Our Mobile Phone</h1>
                    <h1 className='text-base font-bold text-yellow-300 mt-1'>+1 398 4893 191</h1>
                </div>
                <div className="mt-6">
                    <h1 className='text-sm text-white'>Our Email</h1>
                    <Link href={"https://Gmail.com/"}>
                        <h1 className='text-base font-bold text-yellow-300 mt-1'>bigmail@gmail.com</h1>
                    </Link>
                </div>
            </div>
        </div>
        {/* Bottom part */}
        <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between
        items-center text-gray-600 text-sm">
            <p className='text-center text-white md:text-left'>
                Copyright © Bod_Tech. All reserved
            </p>
            <div className="flex items-center text-white space-x-4 mt-4 md:mt-0">
                <span>Social :</span>
                <Link href={"https://Facebook.com/"}>
                    <span className='hover:text-gray-500 text-white'>
                        <FaFacebook />
                    </span>
                </Link>
                <Link href={"https://X.com/"}>
                    <span className='hover:text-gray-500 text-white'>
                        <FaTwitter />
                    </span>
                </Link>
                 <span className='hover:text-gray-500 text-white'>
                    <FaDribbble />
                </span>
            </div>
        </div>
    </div>
  );
};

export default Footer; 