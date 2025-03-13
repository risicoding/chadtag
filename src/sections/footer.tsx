import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { AiFillYoutube } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';

import { IoIosHome } from 'react-icons/io';
const Footer = () => {
  return (
    <footer className="min-h-[calc(100vh-400px)] space-y-6 px-6 py-12">
      <div>
        <h2 className="bg-gradient-to-b from-neutral-300 via-neutral-500 to-neutral-700 bg-clip-text text-4xl font-bold text-transparent">
          Chadtag
        </h2>
      </div>
      <div className="flex flex-col gap-6 text-neutral-300 sm:flex-row">
        <ul>
          <li className="flex items-center gap-2">
            <IoIosHome />
            Home
          </li>
          <li className="flex items-center gap-2">
            <AiFillYoutube />
            Yt max course
          </li>
          <li className="flex items-center gap-2">
            <IoMdCall />
            Coaching call
          </li>
        </ul>
        <ul className="space-y-1">
          <a href="https://www.youtube.com/@chadtag">
            <li className="flex items-center gap-2">
              <AiFillYoutube />
              @chadtag
            </li>
          </a>
          <a href="https://www.instagram.com/chadtagyt/?hl=en">
            <li className="flex items-center gap-2">
              <AiFillInstagram />
              @chadtagyt
            </li>
          </a>
          <li className="flex items-center gap-2">
            <IoMdMail />
            chadtag4404@gmail.com
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
