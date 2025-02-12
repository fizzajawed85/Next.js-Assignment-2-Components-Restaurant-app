import React from 'react';
import Image from 'next/image';
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="container pt-6">
        <div className="flex justify-between items-center">
      <Image src="/logo.png" width={50} height={50} alt="logo"/>
      <ul className="md:flex gap-8 items-center font-serif text-[14px] text-orange-100 hidden">
        <li><Link className="hover:text-pink-400" href="/">Home</Link></li>
        <li><Link className="hover:text-pink-400" href="/Services">Services</Link></li>
        <li><Link className="hover:text-pink-400" href="/Menu">Menu</Link></li>
        <li><Link className="hover:text-pink-400" href="/Survey">Survey</Link></li>
        <button className="bg-red text-orange-100 px-6 py-2 rounded-3xl">SignUp</button>
      </ul>
      <div className="md:hidden">
          <span className="text-red">
            <AiOutlineMenu size={30} />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header;
