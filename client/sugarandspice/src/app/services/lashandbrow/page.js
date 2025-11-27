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
  const packages = [
    {
      title: "Lash Lift",
      desc: "Our 'Lash Lift' service is the perfect curl enhancement for the natural lashes lasting 6-8 weeks. This service includes a relaxing hand and arm massage.",
      price: "$75.00 • 45 minutes",
      link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/5/treatment/21",
    },
    {
      title: "Lush and Brow Combo",
      price: "$120.00 • 105 minutes",
      link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/5/treatment/224",
    },
    {
      title: "Pretty Peepers",
      price: "$67.00 • 45 minutes",
      desc: "A luxury 'Brow Design + Tint' and 'Lash Tint' package to subtly enhance natural lashes and brows. Includes a relaxing hand and arm massage and finishing touches with makeup.",
      link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/5/treatment/5",
    },
    {
      title: "Luxe Lash Tinting",
      price: "$35.00 • 30 minutes",
      desc: "Our signature 'Luxe Lash Tinting' service includes a custom colour enhancement of your natural lashes to darken existing top and bottom lashes safely and comfortably. Includes a relaxing hand and arm massage.",
      link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/5/treatment/200",
    },
    {
      title: "Lash Lift + Tint",
      price: "$90.00 • 60 minutes",
      desc: "Our signature 'Lash Lift + Tint' service is a client favorite to perfectly enhance your eyes with a custom curl and colour for superb low maintenance beauty. This service includes a nourishing deep conditioning keratin treatment and a relaxing hand and arm massage.",
      link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/5/treatment/251",
    },
  ];

  return (
    <>
      <Header />

      <main
        className="relative bg-black text-[#d1b26f] min-h-screen pt-10 px-4 sm:px-8 lg:px-16 overflow-hidden bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/assets/images/3.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

        {/* Hero Banner */}
        <div className="relative z-10">
          <section className="relative h-96 w-full overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h1 className="text-6xl sm:text-7xl font-[Ms Madi] text-[#d1b26f] drop-shadow-lg">
                Lash & Brow Lifting
              </h1>
              <p className="text-[#f8ecd3] mt-4 max-w-2xl">
                Elevate your eyes with our expertly crafted lash extensions —
                where precision meets artistry. Each lash is individually
                applied for a flawless, natural finish that enhances your beauty
                effortlessly.
              </p>
            </div>
          </section>

          <section className="max-w-7xl mx-auto mb-12">
            <motion.div
              className="w-full max-h-[28rem] sm:max-h-[32rem] lg:max-h-[36rem] rounded-4xl shadow-2xl border border-[#d1b26f]/40 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/images/SugarSpice_051.jpg"
                alt="Luxury facial treatment"
                className="w-full h-full object-contain object-center"
              />
            </motion.div>
          </section>

          {/* Packages Section */}
          <section className=" py-24 px-6 sm:px-10 lg:px-20">
            <motion.h2
              className="text-5xl font-[Ms Madi] text-center text-[#d1b26f] mb-20"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
            >
              Lash Lift & Brow Lamination Lervices
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
              {packages.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-[#111] rounded-3xl border border-[#2e2e2e] overflow-hidden 
                hover:shadow-[0_0_40px_rgba(209,178,111,0.35)] hover:-translate-y-1 transition-all duration-500 group"
                >
                  <Link href={service.link} className="block">
                    {/* Text */}
                    <div className="p-8 space-y-4">
                      <h3 className="text-3xl font-[Ms Madi] text-[#d1b26f] group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      {service.desc && (
                        <p className="text-[#f5e1a4]/90 leading-relaxed text-sm sm:text-base">
                          {service.desc}
                        </p>
                      )}
                      <p className="text-[#d1b26f] font-semibold text-lg">
                        {service.price}
                      </p>
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
