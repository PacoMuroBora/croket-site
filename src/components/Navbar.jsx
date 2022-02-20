import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function Button({ text, bg, padding }) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}

function Navbar() {
  const mobileMenuRef = useRef();

  function handleMenuBtn() {
    mobileMenuRef.current?.classList.toggle('hidden');
  }

  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900 z-50">
      <nav className="flex items-center container mx-auto h-full justify-between">
        {/* Brand */}
        <a
          href="https://www.instagram.com/pacocroket/"
          className="flex items-center py-4 px-2"
        >
          <img
            src="/src/static/favicon.svg"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="font-semibold text-gray-500 text-lg">
            Croket Light Art
          </h1>
          <h1 className="hidden md:block font-semibold text-gray-500 text-lg">
            - Interactive Light Installations
          </h1>
        </a>
        {/* Desktop */}

        <div ref={mobileMenuRef} className="hidden relative md:block">
          <ul className="flex items-center space-x-10 text-sm md:flex-row flex-col absolute md:static right-0">
            <li>
              <Link to="/" className="text-gray-400 hover:text-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-gray-100">
                About Us
              </Link>
            </li>
            {/* <li><Link to="/docs" className="text-gray-400 hover:text-gray-100">Docs</Link></li> */}
          </ul>
        </div>
        <div className="hidden md:block">
          <Button
            text="Login"
            bg="bg-gradient-to-r from-purple-500 to-blue-500"
          />
        </div>
        {/* Mobile */}

        {/* <div className="hidden">
          <ul>
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div> */}

        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button p-4"
            onClick={handleMenuBtn}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
