import React, { useState } from "react";
import { Link } from "@remix-run/react";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const handleOpen = () => {
    if (!toggle) {
      setToggle(true)
    }
    else return
  }
  const handleClose = () => {
    if (toggle) {
      setToggle(false)
    }
    else return
  }

  return (
    <nav className='fixed top-0 content-center h-14 md:h-20 md:pl-12 md:pr-12 w-full font-thin backdrop-blur-sm bg-slate-50 z-10'>
      {toggle && <div className="flex h-screen w-full items-center justify-center bg-slate-50 opacity-95 backdrop-blur-sm">
        <div className="block fixed top-0 right-0 -translate-x-[50%] translate-y-[50%] mr-2.5 mt-2.5 scale-150" onClick={handleClose}>
          <CloseIcon />
        </div>
        <div className="flex flex-col h-3/5 -mt-16 items-center justify-between">
          <div className="flex text-2xl uppercase tracking-widest">
            <Link to='/'>
              Home
            </Link>
          </div>
          <div className="flex text-2xl uppercase tracking-widest">
            <Link to='/about'>
              About
            </Link>
          </div>
          <div className="flex text-2xl uppercase tracking-widest">
            <Link to='/portfolio'>
              Portfolio
            </Link>
          </div>
          <div className="flex text-2xl uppercase tracking-widest">
            <Link to='/information'>
              Details
            </Link>
          </div>
          <div className="flex text-2xl uppercase tracking-widest">
            <Link to='/contact'>
              Contact
            </Link>
          </div>
          <div className="flex text-2xl uppercase tracking-widest">
            <Link to='https://app.squarespacescheduling.com/schedule.php?owner=25043538' target={'_blank'} prefetch='intent' className='flex p-4 border border-black transition-all duration-200 ease-in-out hover:bg-slate-300 hover:opacity-30'>
              Book Now
            </Link>
          </div>
        </div>
      </div>}
        <div className='flex flex-row justify-between h-14 md:h-20 w-full items-center'>
          <Link to='/' prefetch='intent' className='tracking-wider uppercase ml-5'>
            SoShika Photography
          </Link>
          <div className='flex flex-row justify-between items-center h-full p-4 max-[640px]:hidden'>
            <div className='flex uppercase tracking-wider'>
              <div>
                <Link to='/' prefetch='intent' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  Home
                </Link>
              </div>
              <div>
                <Link to='/about' prefetch='intent' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  About
                </Link>
              </div>
              <div>
                <Link to='/portfolio' prefetch='intent' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  Portfolio
                </Link>
              </div>
              <div>
                <Link to='/information' prefetch='intent' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  Details
                </Link>
              </div>
              <div>
                <Link to='/contact' prefetch='intent' className='flex p-4 cursor-pointer hover:border-b hover:ease-in-out hover:border-b-black'>
                  Contact
                </Link>
              </div>
              <div className='pl-4'>
                <Link to='https://app.squarespacescheduling.com/schedule.php?owner=25043538' target={'_blank'} prefetch='intent' className='flex p-4 border border-black transition-all duration-200 ease-in-out hover:bg-slate-300 hover:opacity-30'>
                  Ready To Book
                </Link>
              </div>
            </div>
        </div>
        <div className="md:hidden mr-5" onClick={handleOpen}>
          <MenuIcon className="scale-150"/>
        </div>
        </div>
      </nav>
  )
}