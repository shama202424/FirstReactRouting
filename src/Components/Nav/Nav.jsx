import {  NavLink} from 'react-router-dom';
import { useState } from 'react';


export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="fixed h-10vh flex justify-between items-center z-40 text-white sm:py-9 sm:px-20 py-8 px-4 w-full bg-slate-700 ">
          <div className="flex items-center flex-1">
            <span className=" text-3xl font-bold">START FRAMEWORK</span>
          </div>
          <div className="lg:flex flex-1 items-center justify-end font-normal hidden">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <NavLink to="/about"><li className='text-white'>ABOUT</li></NavLink>
              <NavLink to="/portfolio"><li className='text-white'>PORTFOLIO</li></NavLink>
              <NavLink to="/contact"><li className='text-white'>CONTACT</li></NavLink>
            </ul>
          </div>
          <div className="lg:hidden">
            <button className='bg-slate-700 border-slate-800' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className="fa-solid fa-bars text-slate-800 text-2xl"></i>
            </button>
            {isMobileMenuOpen && (
              <div className="absolute bg-slate-700 top-full right-0 w-full p-4">
                <ul className="flex flex-col gap-4">
                  <NavLink to="/about"><li className='text-white'>ABOUT</li></NavLink>
                  <NavLink to="/portfolio"><li className='text-white'>PORTFOLIO</li></NavLink>
                  <NavLink to="/contact"><li className='text-white'>CONTACT</li></NavLink>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
