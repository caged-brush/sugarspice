"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between p-4 lg:grid lg:grid-cols-3 lg:p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Left - Logo */}
        <div className="flex items-center">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Sugar &amp; Spice</span>
            <Image
              className="h-16 w-16 rounded-full"
              src="/assets/images/sugarspice logo.jpeg"
              alt="Sugar &amp; Spice Logo"
              width={64}
              height={64}
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open main menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Center - Menu (Desktop) */}
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
          <Link className="text-md font-semibold leading-6" href="/about">
            About
          </Link>
          <Link className="text-md font-semibold leading-6" href="/gallery">
            Gallery
          </Link>
          <Link
            href="/book"
            className="text-md font-semibold leading-6 whitespace-nowrap"
          >
            Book Online
          </Link>
        </div>

        {/* Right - Login (Desktop) */}
        {/* <div className="hidden lg:flex justify-end">
          <a href="#" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end lg:hidden">
            <div className="bg-white w-2/3 max-w-xs h-full p-6 flex flex-col">
              <button
                type="button"
                className="self-end mb-6"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              </button>
              <nav className="flex flex-col gap-y-6">
                <Link
                  href="/"
                  className="text-lg font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-lg font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Product
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/gallery"
                  className="text-lg font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/book"
                  className="text-lg font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Online
                </Link>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
