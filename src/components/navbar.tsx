'use client';
import { GradientButton } from './gradient-border-button';
import { Exo_2 } from 'next/font/google';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';

const exo = Exo_2({ subsets: ['latin'] });

const NavLinks = ({ className }: { className?: string }) => (
  <ul className={cn('text-sm', className)}>
    <li>
      <a href="#" className="hover:text-neutral-900 hover:underline">
        Courses
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-neutral-900 hover:underline">
       Coaching 
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-neutral-900 hover:underline">
        About
      </a>
    </li>
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full">
      <nav className="relative z-50 mx-auto flex sm:max-w-4xl max-w-2xl items-center justify-between gap-3 rounded-none border border-neutral-800 px-6 py-3 text-white backdrop-blur-md sm:rounded-full">
        {/* Logo */}
        <div
          className={`text-xl font-bold text-white mix-blend-exclusion ${exo.className}`}
        >
          Chadmax
        </div>

        {/* Navigation Links */}
        <NavLinks className="hidden gap-6 text-neutral-100 sm:flex" />

        {/* Buy Now Button */}
        <div className="flex items-center gap-4">
          <GradientButton className="hidden sm:flex">
            Explore courses
          </GradientButton>

          {/* Hamburger Menu */}
          <div className="relative flex sm:hidden">
            <div
              className="aspect-square cursor-pointer rounded-md border border-neutral-500 p-2 transition-all duration-300"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <NavLinks className="absolute top-16 right-0 z-40 flex w-1/4 flex-col px-4 py-6 backdrop-blur-md sm:hidden" />
      )}
    </div>
  );
};

export default Navbar;
