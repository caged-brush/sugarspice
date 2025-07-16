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
    </footer>
  );
};

export default Footer;
