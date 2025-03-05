'use client';
import { GradientButton } from './gradient-border-button';
import { Exo_2 } from 'next/font/google';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

const exo = Exo_2({});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed z-50 w-full">
      <nav className="relative z-50 mx-auto flex max-w-4xl items-center justify-between gap-3 rounded-none border bg-neutral-300/25 px-6 py-2 backdrop-blur-md sm:rounded-full">
        {/* Logo */}
        <div className={`text-xl font-bold ${exo.className}`}>Chadmax</div>

        {/* Navigation Links */}
        <ul className="hidden gap-6 text-neutral-600 sm:flex">
          <li>
            <a href="#" className="hover:underline">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
        </ul>

        {/* Buy Now Button */}
        <div className="flex items-center gap-4">
          <GradientButton>Buy now</GradientButton>
          <div className="flex sm:hidden">
            <div
              className="aspect-square rounded-md border border-neutral-500 p-2"
              onClick={() => {
                setIsOpen((prev) => !prev);
                console.log('hello')
              }}
            >
              {isOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
