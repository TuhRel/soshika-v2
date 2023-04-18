import React from "react";
import { Link } from "@remix-run/react";

export default function Navbar() {

  return (
    <nav className='fixed top-0 content-center md:h-20 pl-12 pr-12 w-full font-thin backdrop-blur-sm bg-slate-100 z-10'>
        <div className='flex flex-row justify-between md:h-20 w-full items-center'>
          <Link to='/' prefetch='intent' className='tracking-wider uppercase'>
            SoShika Photography
          </Link>
          <div className='flex flex-row justify-between items-center h-full p-4'>
            <div className='flex uppercase tracking-wider'>
              <div>
                <Link to='/' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  Home
                </Link>
              </div>
              <div>
                <Link to='/about' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  About
                </Link>
              </div>
              <div>
                <Link to='/portfolio' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  Portfolio
                </Link>
              </div>
              <div>
                <Link to='/information' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  Details
                </Link>
              </div>
              <div>
                <Link to='/contact' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  Contact
                </Link>
              </div>
              <div className='pl-4'>
                <Link to='https://app.squarespacescheduling.com/schedule.php?owner=25043538' target={'_blank'} className='flex p-4 border border-black transition-all duration-200 ease-in-out hover:bg-slate-300 hover:opacity-30'>
                  Ready To Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}