import { Menu } from "heroicons-react";
import Link from "next/link";
import React, { useState } from "react";
import SideBar from "./SideBar";

function Navigation() {
  const [openSideBar, setOpenSideBar] = useState(false);

  const open = () => {
    setOpenSideBar(true);
  };
  const close = () => {
    setOpenSideBar(false);
  };

  return (
    <>
      <SideBar close={close} openSideBar={openSideBar} />
      <nav className='flex  justify-between items-center  px-4 md:px-6 lg:px-8 py-4 bg-[#212529] text-white '>
        <div className='text-4xl '>Logo</div>
        <div className='hidden lg:flex text-xl space-x-20'>
          <Link href='/'>
            <a className='hover:text-[#0bceaf] transition-colors duration-300'>
              Home
            </a>
          </Link>
          <Link href='/'>
            <a className='hover:text-[#0bceaf] transition-colors duration-300'>
              About
            </a>
          </Link>
          <Link href='/'>
            <a className='hover:text-[#0bceaf] transition-colors duration-300'>
              Services
            </a>
          </Link>
          <Link href='/'>
            <a className='hover:text-[#0bceaf] transition-colors duration-300'>
              Contact Us
            </a>
          </Link>
          <Link href='/testApp'>
            <a className='hover:text-[#0bceaf] transition-colors duration-300'>
              Test
            </a>
          </Link>
        </div>
        <div>
          <Link href='/'>
            <a className='hidden lg:inline-flex hover:text-[#212529] transition-colors duration-300 text-xl bg-[#08878b] hover:bg-[#0bceaf] py-3 px-5 rounded-md'>
              Progress
            </a>
          </Link>
          <Menu
            className='lg:hidden cursor-pointer hover:text-[#0bceaf] transition-colors duration-300 h-16 w-10'
            onClick={open}
          />
        </div>
      </nav>
    </>
  );
}

export default Navigation;
