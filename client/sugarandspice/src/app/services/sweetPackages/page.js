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
      img: "/assets/images/lashes1.jpg",
    },
    {
      title: "Lush and Brow Combo",
      price: "$120.00 • 105 minutes",
      link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/5/treatment/224",
      img: "/assets/images/lash+brows.jpg",
    },
    {
      title: "Pretty Peepers",
      price: "$67.00 • 45 minutes",
      desc: "A luxury 'Brow Design + Tint' and 'Lash Tint' package to subtly enhance natural lashes and brows. Includes a relaxing hand and arm massage and finishing touches with makeup.",
      link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/5/treatment/5",
      img: "/assets/images/sugarspice_01.jpg",
    },
    {
      title: "Luxe Lash Tinting",
      price: "$35.00 • 30 minutes",
      desc: "Our signature 'Luxe Lash Tinting' service includes a custom colour enhancement of your natural lashes to darken existing top and bottom lashes safely and comfortably. Includes a relaxing hand and arm massage.",
      link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/5/treatment/200",
      img: "/assets/images/luxe lash tinting.png",
    },
    {
      title: "Lash Lift + Tint",
      price: "$90.00 • 60 minutes",
      desc: "Our signature 'Lash Lift + Tint' service is a client favorite to perfectly enhance your eyes with a custom curl and colour for superb low maintenance beauty. This service includes a nourishing deep conditioning keratin treatment and a relaxing hand and arm massage.",
      link: "https://sugarandspicebeautybar.janeapp.com/#/discipline/5/treatment/251",
      img: "/assets/images/lash lift and tint.png",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative h-96 w-full overflow-hidden">
        <Image
          src="/assets/images/sugarspice_01.jpg"
          alt="Sweet Packages Banner"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-6xl sm:text-7xl font-[Ms Madi] text-[#d1b26f] drop-shadow-lg">
            Sweet Packages
          </h1>
          <p className="text-[#f8ecd3] mt-4 max-w-2xl">
            Elevate your eyes with our expertly crafted lash extensions — where
            precision meets artistry. Each lash is individually applied for a
            flawless, natural finish that enhances your beauty effortlessly.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-[#0a0a0a] py-24 px-6 sm:px-10 lg:px-20">
        <motion.h2
          className="text-5xl font-[Ms Madi] text-center text-[#d1b26f] mb-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          Sweet Packages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto">
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
                {/* Image */}
                <div className="relative w-full overflow-hidden rounded-t-3xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-3xl"></div>
                  </div>
                </div>

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

      <Footer />
    </>
  );
}
