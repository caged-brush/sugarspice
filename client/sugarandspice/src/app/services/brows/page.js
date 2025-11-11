"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/component/header";
import Footer from "@/component/footer";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Page() {
  const treatments = [
    {
      title: "Brows",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/2/treatment/1",
      desc: "Our signature Brow 'Brow Design' includes a mini pressure point massage, waxing, tweezing, trimming and the finishing touches with makeup to perfect your arches.",
      duration: "30 min",
      price: "$29.00",
    },
    {
      title: "Bombshell Brows",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/2/treatment/2",
      desc: "Our most popular 'Bombshell Brow' service includes our signature Brow Design + Brow Tint for perfected and defined arches.",
      duration: "30 min",
      price: "$37.00",
    },
    {
      title: "Brow Lamination",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/2/treatment/3",
      desc: "Our coveted 'Brow Lamination' lifts and realigns brow hairs for a fuller, fluffy look, includes a Brow Design + Brow Tint. This advanced brow service is perfect to: transform skinny brows making them look fuller, tames unruly brows for better alignment and helps create symmetry by chemical process and finishes with a nourishing keratin treatment and finishing touches with makeup.",
      duration: "60 min",
      price: "$90.00",
    },
    {
      title: "Brow Tint",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/2/treatment/4",
      desc: "Add colour to existing natural brow hairs with this customized option to create consistency throughout colour and shape while minimizing the appearance of gray's.",
      duration: "15 min",
      price: "$20.00",
    },
    {
      title: "Brow Add on",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/2/treatment/201",
      duration: "15 min",
      price: "$21.00",
    },
  ];

  return (
    <>
      <Header />
      <main
        className="relative bg-black text-[#d1b26f] pt-24 min-h-screen px-6 sm:px-10 lg:px-20 overflow-hidden bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/images/SSBB background 3.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="max-w-5xl mx-auto text-center mb-14">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-[Ms Madi] font-bold mb-4 drop-shadow-[0_2px_4px_rgba(209,178,111,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Brows
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-[#d1b26f] mx-auto mb-6 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="text-lg sm:text-xl text-[#f5e1a4] max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Rock the best brows at Sugar & Spice Beauty Bar! We offer a
              variety of coveted spa services to prettify your peepers and
              create style-ized brows in an uplifting environment. Your
              treatment begins with an aromatherapy brow massage, brow shaping
              and design including wax, tweeze, trim and colour touch up with
              signature brow products to showcase your most expressive features.
            </motion.p>
          </section>

          {/* Parallax Image Banner */}
          <section className="relative w-full h-[28rem] sm:h-[34rem] lg:h-[40rem] overflow-hidden rounded-3xl mb-20 shadow-2xl border border-[#d1b26f]/30">
            <div
              className="absolute inset-0 bg-fixed bg-center bg-cover"
              style={{
                backgroundImage: "url('/assets/images/0K6A0244-1 copy.jpg')",
                transform: "translateZ(0)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </section>

          {/* Treatments Grid */}
          <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {treatments.map((t, i) => (
              <motion.div
                key={i}
                className="bg-[#1a1a1a]/80 p-6 rounded-3xl shadow-lg hover:shadow-[0_0_20px_rgba(209,178,111,0.6)] hover:scale-[1.02] transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i + 1}
              >
                <Link
                  href={t.href}
                  className="text-[#d1b26f] hover:text-white font-bold text-xl underline block mb-2 transition-colors duration-200"
                >
                  {t.title}
                </Link>

                {t.duration && t.price && (
                  <p className="text-sm sm:text-base text-[#f5e1a4] mb-1">
                    {t.duration} –{" "}
                    <span className="text-[#d1b26f]">{t.price}</span>
                  </p>
                )}
                <p className="text-[#f5e1a4] text-sm sm:text-base leading-relaxed">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </section>

          {/* CTA */}
          <section className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="https://sugarandspicebeautybar.janeapp.com/"
                className="inline-block px-8 py-3 bg-[#d1b26f] text-black font-bold rounded-full hover:bg-gradient-to-r hover:from-[#d1b26f] hover:to-[#f5e1a4] transition-all duration-300 shadow-lg"
              >
                Book Your Facial
              </Link>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
