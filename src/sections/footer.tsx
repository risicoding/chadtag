import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
                Chadmax
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Youtube max course
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <a
                    href="https://m.youtube.com/@chadtag"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <FaYoutube />
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/chadtagyt/?hl=en"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <AiFillInstagram />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
