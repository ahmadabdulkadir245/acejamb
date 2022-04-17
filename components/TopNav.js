import {
  ArrowNarrowUpOutline,
  Gift,
  LockOpen,
  MinusCircle,
  Truck,
  User,
} from "heroicons-react";
import Link from "next/link";
import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";

function TopNav() {
  const { data: session } = useSession();
  return (
    <div className='hidden lg:flex w-full bg-[#08878b] h-30 py-3 px-8  justify-between items-center text-lg text-white '>
      <div>
        CONTACT US {""}--&gt;{" "}
        <Link href='/'>
          <a className='hover:text-blue-500 underline transition-colors duration-300'>
            acejamb@gmail.com
          </a>
        </Link>
      </div>
      <div className='flex space-x-10'>
        <div className='flex group hover:text-[#212529] transition-colors duration-300'>
          <User className='h-6' />
          <Link href='/profile'>
            <a>{session ? session.user.name : <p>Profile</p>}</a>
          </Link>
        </div>
        <div
          className='flex  hover:text-[#212529] transition-colors duration-300'
          onClick={!session ? signIn : signOut}
        >
          <LockOpen className='h-6' />
          <Link href='/logout'>
            <a>Logout</a>
          </Link>
        </div>
        <div className='flex space-x-6 '>
          <Link href='/logout'>
            <a>
              <Truck className='h-6 hover:text-[#212529] transition-colors duration-300' />
            </a>
          </Link>
          <Link href='/logout'>
            <a>
              <MinusCircle className='h-6 hover:text-[#212529] transition-colors duration-300' />
            </a>
          </Link>
          <Link href='/logout'>
            <a>
              <ArrowNarrowUpOutline className='h-6 hover:text-[#212529] transition-colors duration-300' />
            </a>
          </Link>
          <Link href='/logout'>
            <a>
              <Gift className='h-6 hover:text-[#212529] transition-colors duration-300' />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
