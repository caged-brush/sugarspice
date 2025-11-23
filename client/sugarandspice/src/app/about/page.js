"use client";
import React from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaFire,
  FaHandSparkles,
  FaGem,
  FaBalanceScale,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const coreValues = [
  {
    title: "Teamwork",
    desc: "Creating a culture within our team based on effective communication, respect, integrity, and an understanding that together we can achieve more.",
    icon: <FaUsers className="text-[#d1b26f] w-8 h-8" />,
  },
  {
    title: "Passion",
    desc: "Our drive for excellence fuels continued growth and refinement in the beauty wellness industry.",
    icon: <FaFire className="text-[#d1b26f] w-8 h-8" />,
  },
  {
    title: "Respect",
    desc: "Honoring our clients and each other by valuing thoughts, feelings, and preferences.",
    icon: <FaHandSparkles className="text-[#d1b26f] w-8 h-8" />,
  },
  {
    title: "Excellence",
    desc: "Delivering detail-oriented, exceptional experiences that surpass expectations.",
    icon: <FaGem className="text-[#d1b26f] w-8 h-8" />,
  },
  {
    title: "Integrity",
    desc: "Commitment to honesty, always acting in the best interest of our clients.",
    icon: <FaBalanceScale className="text-[#d1b26f] w-8 h-8" />,
  },
];

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center bg-black px-4 sm:px-8 lg:px-16 pt-24 pb-16 overflow-hidden">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[Ms Madi] font-bold text-[#d1b26f] drop-shadow-[0_2px_4px_rgba(209,178,111,0.6)]">
            About Sugar & Spice
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#f5e1a4] leading-relaxed">
            We combine luxury and technology to create the ultimate beauty
            experience. Our treatments are designed to nourish, rejuvenate, and
            reveal your natural radiance.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md">
            <Image
              src="/assets/images/0K6A0161-1 copy.jpg"
              alt="About Us"
              width={400}
              height={400}
              className="rounded-4xl shadow-2xl border border-[#d1b26f] object-cover w-full h-auto hover:shadow-[0_0_50px_rgba(209,178,111,0.8)] transition-shadow duration-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Core Values Tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValues.map((value, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-b from-[#1a1a1a] to-[#111111] border border-[#d1b26f] rounded-3xl p-6 flex flex-col items-start gap-4 hover:scale-105 hover:shadow-[0_0_25px_rgba(209,178,111,0.7)] transition-all duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={idx + 1}
          >
            <div className="flex items-center gap-4">
              {value.icon}
              <h3 className="text-xl sm:text-2xl font-bold text-[#d1b26f] drop-shadow-[0_1px_2px_rgba(209,178,111,0.8)]">
                {value.title}
              </h3>
            </div>
            <p className="text-[#f5e1a4] text-base sm:text-lg leading-relaxed">
              {value.desc}
            </p>
          </motion.div>
        ))}
      </section>

      <Footer />
    </>
  );
}
