"use client";
import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 py-10 px-6 border-t border-zinc-800 overflow-hidden">
      {/* ✨ Animated Shimmer Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(120deg, #d4af37, #000, #d4af37, #000, #d4af37)",
          backgroundSize: "400% 400%",
          animation: "goldShimmer 12s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Brand Name with Glow */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-wider text-[#d4af37] relative">
          <span
            className="absolute inset-0 blur-2xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, #d4af37 0%, transparent 70%)",
            }}
          ></span>
          <span className="relative">Sugar & Spice Beauty Bar</span>
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/sugarspicebeauty/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#d4af37] transition-all duration-300 hover:text-white hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#d4af37] transition-all duration-300 hover:text-white hover:scale-110"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Contact Info */}
        <address className="flex flex-col sm:flex-row justify-center items-center text-center gap-3 text-sm font-light text-gray-400">
          <a
            href="tel:(250) 851 1719"
            className="hover:text-[#d4af37] transition-colors"
          >
            (250) 851-1719
          </a>
          <span className="hidden sm:inline-block mx-2 text-zinc-700">|</span>
          <a
            href="mailto:sugarandspice.beautybar@gmail.com"
            className="hover:text-[#d4af37] transition-colors"
          >
            sugarandspice.beautybar@gmail.com
          </a>
          <span className="hidden sm:inline-block mx-2 text-zinc-700">|</span>
          <a
            href="https://maps.app.goo.gl/Yr5krSDtEb4ZF2xA6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4af37] transition-colors"
          >
            435 Lansdowne St, Kamloops, BC
          </a>
        </address>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Sugar & Spice. All Rights Reserved.
        </p>
      </div>

      {/* Keyframes for Shimmer */}
      <style jsx>{`
        @keyframes goldShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
