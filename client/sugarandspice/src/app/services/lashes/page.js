"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/component/header";
import Footer from "@/component/footer";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Page() {
  return (
    <>
      <Header />

      <main
        className="relative bg-black text-[#d1b26f] pt-24 min-h-screen px-4 sm:px-8 lg:px-16 overflow-hidden bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/assets/images/4.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        {/* Hero Section */}
        <div className="relative z-10">
          <section className="relative flex flex-col items-center justify-center text-center  overflow-hidden pt-32 pb-24">
            <motion.div
              className="relative z-10 max-w-3xl mx-auto px-6"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h1 className="text-6xl sm:text-7xl font-[Ms Madi] text-[#d1b26f] mb-6 drop-shadow-[0_2px_4px_rgba(209,178,111,0.6)]">
                Lashes
              </h1>
              <p className="text-lg sm:text-xl text-[#f8ecd3] leading-relaxed">
                Elevate your eyes with our expertly crafted lash extensions —
                where precision meets artistry. Each lash is individually
                applied for a flawless, natural finish that enhances your beauty
                effortlessly.
              </p>
            </motion.div>
          </section>

          <section className="max-w-7xl mx-auto mb-12">
            <motion.div
              className="w-full max-h-[28rem] sm:max-h-[32rem] lg:max-h-[36rem] rounded-4xl shadow-2xl border border-[#d1b26f]/40 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/images/SugarSpice_003.jpg"
                alt="Luxury facial treatment"
                className="w-full h-full object-contain object-center"
              />
            </motion.div>
          </section>

          {/* Services Section */}
          <section className="py-24 px-6 sm:px-10 lg:px-20">
            <motion.h2
              className="text-4xl font-[Ms Madi] text-center text-[#d1b26f] mb-16"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
            >
              Lash Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {[
                {
                  title: "Lash Removal",
                  price: "$35.00 • 45 minutes",
                  img: "/assets/images/lash_removal.jpg",
                  link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/4/treatment/209",
                },
                {
                  title: "Dramatic",

                  price: "$280.00 • 195 minutes",
                  img: "/assets/images/dramatic_lashes.jpg",
                  link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/4/treatment/231",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-[#111] rounded-3xl border border-[#2e2e2e] overflow-hidden hover:shadow-[0_0_30px_rgba(209,178,111,0.25)] transition-all duration-500"
                >
                  <Link href={service.link} className="block group">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={500}
                        height={500}
                        className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    <div className="p-8 text-[#f8ecd3] space-y-3">
                      <h3 className="text-2xl text-[#d1b26f] font-semibold">
                        {service.title}
                      </h3>
                      <p className="leading-relaxed">{service.desc}</p>
                      <span className="font-semibold text-[#f8ecd3]">
                        {service.price}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
