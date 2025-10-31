"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full h-20 z-50 bg-black/90 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/images/sugarspice logo.jpeg"
            alt="Sugar & Spice Logo"
            width={60}
            height={60}
            className="rounded-xl shadow-md"
          />
          <span className="text-[#d1b26f] font-[Ms Madi] text-xl select-none">
            Sugar & Spice
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-[#d1b26f]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-white transition-colors">
            Products
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
              className="flex items-center gap-1 hover:text-white transition-colors"
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
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-8 left-0 w-48 bg-black text-[#d1b26f] rounded-lg shadow-xl border border-[#d1b26f] overflow-hidden"
              >
                <div className="flex flex-col">
                  <Link
                    href="/services/facials"
                    className="px-4 py-2 hover:bg-[#d1b26f] hover:text-black transition-colors"
                  >
                    Facials
                  </Link>
                  <Link
                    href="/services/brows"
                    className="px-4 py-2 hover:bg-[#d1b26f] hover:text-black transition-colors"
                  >
                    Brows
                  </Link>
                  <Link
                    href="/services/lashes"
                    className="px-4 py-2 hover:bg-[#d1b26f] hover:text-black transition-colors"
                  >
                    Lashes
                  </Link>
                  <Link
                    href="/services/sweetPackages"
                    className="px-4 py-2 hover:bg-[#d1b26f] hover:text-black transition-colors"
                  >
                    Sweet Packages
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/gallery" className="hover:text-white transition-colors">
            Gallery
          </Link>
          <Link
            href="https://sugarandspicebeautybar.janeapp.com/"
            className="px-4 py-2 bg-[#d1b26f] text-black rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#d1b26f] hover:to-[#f5e1a4] transition-all"
          >
            Book Online
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#d1b26f]"
          onClick={() => setMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black w-2/3 max-w-sm h-full p-6 flex flex-col gap-6 text-[#d1b26f] overflow-y-auto"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "tween" }}
            >
              <button className="self-end mb-4" onClick={() => setMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-[#d1b26f]" />
              </button>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
              <details className="group">
                <summary className="cursor-pointer select-none">Services</summary>
                <div className="flex flex-col ml-4 mt-2 gap-1">
                  <Link href="/services/facials" onClick={() => setMenuOpen(false)}>
                    Facials
                  </Link>
                  <Link href="/services/brows" onClick={() => setMenuOpen(false)}>
                    Brows
                  </Link>
                  <Link href="/services/lashes" onClick={() => setMenuOpen(false)}>
                    Lashes
                  </Link>
                  <Link href="/services/sweetPackages" onClick={() => setMenuOpen(false)}>
                    Sweet Packages
                  </Link>
                </div>
              </details>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
              <Link
                href="https://sugarandspicebeautybar.janeapp.com/"
                className="px-4 py-2 bg-[#d1b26f] text-black rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#d1b26f] hover:to-[#f5e1a4] transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Book Online
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
