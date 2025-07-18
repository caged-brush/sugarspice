"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between p-4 lg:grid lg:grid-cols-3 lg:p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Left - Logo */}
        <div className="flex items-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sugar &amp; Spice</span>
            <Image
              className="h-16 w-16 rounded-xl"
              src="/assets/images/sugarspice logo.jpeg"
              alt="Sugar &amp; Spice Logo"
              width={100}
              height={100}
            />
          </Link>
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
          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="text-md font-semibold leading-6 flex items-center gap-1 focus:outline-none"
              onClick={() => setServicesOpen((open) => !open)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1 flex flex-col">
                  <Link
                    href="/services/lashes"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Lashes
                  </Link>
                  <Link
                    href="/services/brows"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Brows
                  </Link>
                  <Link
                    href="/services/waxing"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Waxing
                  </Link>
                  <Link
                    href="/services/facials"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    Facials & Skin care
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link className="text-md font-semibold leading-6" href="/about">
            About
          </Link>
          <Link className="text-md font-semibold leading-6" href="/gallery">
            Gallery
          </Link>
          <Link
            href="https://sugarandspicebeautybar.janeapp.com/"
            className="text-md font-semibold leading-6 whitespace-nowrap"
          >
            Book Online
          </Link>
        </div>

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
                {/* Mobile Services Dropdown */}
                <details>
                  <summary className="text-lg font-semibold cursor-pointer">
                    Services
                  </summary>
                  <div className="flex flex-col ml-4 mt-2">
                    <Link
                      href="/services/lashes"
                      className="py-1 text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      Lashes
                    </Link>
                    <Link
                      href="/services/brows"
                      className="py-1 text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      Brows
                    </Link>
                    <Link
                      href="/services/waxing"
                      className="py-1 text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      Waxing
                    </Link>
                    <Link
                      href="/services/facials"
                      className="py-1 text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      Facials & Skin care
                    </Link>
                  </div>
                </details>
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
