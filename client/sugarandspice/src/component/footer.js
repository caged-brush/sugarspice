import React from "react";
// Add react-icons import
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t">
      <p className="text-sm ">
        © {new Date().getFullYear()} Sugar & Spice. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="https://www.instagram.com/sugarspicebeauty/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-2xl"
        >
          <FaFacebook />
        </a>
      </div>
      <div>
        <address className="flex justify-center items-center gap-4 mt-4 text-sm">
          <span>
            <a href="tel:(250) 851 1719" className="hover:underline">
              (250) 851-1719
            </a>
          </span>
          <span className="mx-2 h-4 w-px bg-gray-300 inline-block" />
          <span>
            <a
              href="mailto:sugarandspice.beautybar@gmail.com"
              className="hover:underline"
            >
              sugarandspice.beautybar@gmail.com
            </a>
          </span>
          <span className="mx-2 h-4 w-px bg-gray-300 inline-block" />
          <span>
            <a
              href="https://maps.app.goo.gl/Yr5krSDtEb4ZF2xA6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              433 Lansdowne ST . Kamloops, BC V2C 1Y3 
            </a>
          </span>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
