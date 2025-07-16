import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav
        className="mx-auto grid max-w-7xl grid-cols-3 items-center p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Left - Logo */}
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-20 rounded-full w-auto"
              src="../assets/images/sugarspice logo.jpeg"
              alt=""
            />
          </a>
        </div>

        {/* Center - Menu */}
        <div className="hidden lg:flex lg:justify-center lg:gap-x-12">
          <Link className="text-md font-semibold leading-6" href="/">
            Home
          </Link>
          <Link className="text-md font-semibold leading-6" href="/products">
            Product
          </Link>
          <Link className="text-md font-semibold leading-6" href="/services">
            Services
          </Link>
          <a href="#" className="text-md font-semibold leading-6">
            About
          </a>
      
          <a href="#" className="text-md font-semibold leading-6">
            Gallery
          </a>
          <a
            href="#"
            className="text-md font-semibold leading-6 whitespace-nowrap"
          >
            Book Online
          </a>
        </div>

        {/* Right - Login */}
        {/* <div className="hidden lg:flex justify-end">
          <a href="#" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
