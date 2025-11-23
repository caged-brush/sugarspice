"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative bg-black text-[#f5e1a4] overflow-hidden bg-center bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/assets/images/1.png')",
      }}
    >
      {/* Animated gold shimmer overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(120deg, #d4af37, #000, #b59440, #000, #d4af37)",
          backgroundSize: "400% 400%",
          animation: "goldGlow 14s ease-in-out infinite",
        }}
      />

      {/* Main content overlay for readability */}
      <div className="relative z-10 flex flex-col-reverse lg:grid lg:grid-cols-2 items-center px-6 sm:px-12 lg:px-20 py-16 sm:py-24 lg:py-32 bg-black/70 backdrop-blur-[2px]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#d4af37] drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] mb-6">
            Kamloops&apos; Original Lash &amp; Brow Studio
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#f5e1a4]/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Established in 2008, Sugar & Spice sets the gold standard in
            precision beauty. From expert lashes and brows to rejuvenating
            facials — we blend luxury, artistry, and care to enhance your
            natural beauty.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Link
              href="/about"
              className="px-6 py-3 rounded-full bg-[#d4af37] text-black font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#b59440] hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            >
              Explore Our Story
            </Link>
            <Link
              href="https://sugarandspicebeautybar.janeapp.com/"
              className="px-6 py-3 rounded-full border border-[#d4af37] text-[#d4af37] font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#d4af37] hover:text-black hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>

          {/* Trust Tags */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-[#f5e1a4]/70 tracking-wide uppercase">
            <span className="border border-[#d4af37]/40 px-3 py-1 rounded-full">
              15+ Years Experience
            </span>
            <span className="border border-[#d4af37]/40 px-3 py-1 rounded-full">
              Luxury Skin & Lash Care
            </span>
            <span className="border border-[#d4af37]/40 px-3 py-1 rounded-full">
              Female-Owned
            </span>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end mb-10 lg:mb-0"
        >
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl overflow-hidden mt-5 rounded-[2rem] border border-[#d4af37]/30 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <Image
              src="/assets/images/SugarSpice_112.jpg"
              alt="Luxury beauty treatment"
              width={900}
              height={900}
              className="object-cover w-full h-auto transform hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
          </div>
        </motion.div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="relative z-10 text-center px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-t from-black/90 via-black/80 to-transparent">
        <h2 className="text-3xl sm:text-4xl text-[#d4af37] mb-6">
          Why Choose Sugar & Spice
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-[#f5e1a4]/80">
          <div>
            <h3 className="font-bold text-[#d4af37] mb-2 text-lg">
              Expert Artists
            </h3>
            <p className="text-sm leading-relaxed">
              Every service is performed by highly trained professionals using
              precision techniques for exceptional, natural results.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#d4af37] mb-2 text-lg">
              Premium Products
            </h3>
            <p className="text-sm leading-relaxed">
              We use only luxury-grade products that nourish, protect, and
              enhance your beauty safely and effectively.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#d4af37] mb-2 text-lg">
              Elevated Experience
            </h3>
            <p className="text-sm leading-relaxed">
              From the moment you step in, every detail — lighting, scent, and
              sound — is designed to immerse you in tranquility.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes goldGlow {
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
    </section>
  );
}
