import Instagram from "@mui/icons-material/Instagram";
import Facebook from '@mui/icons-material/Facebook'
import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <>
      <footer className='flex h-20 bottom-0 justify-center items-center bg-slate-100'>
        <div className='flex justify-center flex-col items-center'>
          <div className='text-base'>
            <Link to='' target='_blank' rel='noopener noreferrer' className='p-2.5'>
              <Instagram className='scale-120' />
            </Link>
            <Link to='' target='_blank' rel='noopener noreferrer' className='p-2.5'>
              <Facebook className='scale-120' />
            </Link>
          </div>
          <div className='text-base'>
            Copyright 2023 SoShika Photography, LLC ©
          </div>
        </div>
      </footer>
    </>
  )
}