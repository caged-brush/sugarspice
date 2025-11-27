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
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const coreValues = [
  {
    title: "Teamwork",
    desc: "Creating a team culture built on communication, respect, integrity, and the belief that together we achieve more.",
    icon: <FaUsers className="text-[#d1b26f] w-8 h-8" />,
  },
  {
    title: "Passion",
    desc: "A commitment to excellence that drives growth and innovation in the beauty and wellness space.",
    icon: <FaFire className="text-[#d1b26f] w-8 h-8" />,
  },
  {
    title: "Respect",
    desc: "Honoring every client’s thoughts, feelings, and preferences with empathy and care.",
    icon: <FaHandSparkles className="text-[#d1b26f] w-8 h-8" />,
  },
  {
    title: "Excellence",
    desc: "Delivering highly-detailed, elevated service that consistently exceeds expectations.",
    icon: <FaGem className="text-[#d1b26f] w-8 h-8" />,
  },
  {
    title: "Integrity",
    desc: "Always acting with honesty and putting the client's best interests first.",
    icon: <FaBalanceScale className="text-[#d1b26f] w-8 h-8" />,
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main
        className="relative bg-black text-[#d1b26f] min-h-screen px-4 sm:px-8 lg:px-16 overflow-hidden bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/assets/images/5.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        {/* ==== HERO + MISSION SPLIT SECTION ==== */}
        <div className="relative z-10">
          <section className=" px-4 sm:px-8 lg:px-16 pt-24 pb-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* LEFT TEXT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[Ms Madi] font-bold text-[#d1b26f] mb-6">
                  About Sugar & Spice
                </h1>

                <p className="text-lg sm:text-xl text-[#f5e1a4] leading-relaxed mb-8">
                  We blend luxury, advanced aesthetics, and personalized care to
                  help you feel confident, radiant, and restored.
                </p>

                {/* Mission Statement embedded here */}
                <div className="bg-[#111]/80 border border-[#d1b26f]/40 rounded-3xl p-6 shadow-[0_0_25px_rgba(209,178,111,0.25)]">
                  <h2 className="text-2xl font-bold font-[Ms Madi] text-[#d1b26f] mb-3">
                    Our Mission
                  </h2>
                  <p className="text-[#f5e1a4] text-base sm:text-lg leading-relaxed">
                    Sugar & Spice Medi Spa provides exceptional, customized
                    Aesthetics services that empower clients to achieve beauty
                    and confidence in a nurturing environment.
                  </p>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="w-full max-w-sm">
                  <Image
                    src="/assets/images/0K6A0161-1 copy.jpg"
                    alt="About Us"
                    width={350}
                    height={350}
                    className="rounded-3xl shadow-2xl border border-[#d1b26f] object-cover w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ==== TESTIMONIALS SECTION ==== */}
          <section className="py-20 px-4 sm:px-10 lg:px-20 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h2
                className="text-4xl sm:text-5xl font-[Ms Madi] text-[#d1b26f] mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                What Our Clients Say
              </motion.h2>

              <motion.p
                className="text-[#f5e1a4] max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                We’re proud to serve hundreds of happy clients. Read real
                experiences from real people and see why Sugar & Spice Medi Spa
                is trusted for luxury beauty + wellness services.
              </motion.p>

              <motion.a
                href="https://www.google.com/search?sca_esv=239f16d3ff377c19&hl=en&sxsrf=AE3TifPrwfHvlQajM3a4HUurY1NMTvjcvA:1764236660898&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s9kwCiFD89DoE3JYPHy3YV36eo5rbNktBtNXE-Ai824jmzTb8EG02aF6E-I72CAgoV00-lXfEl-KU9QWYpEoekwvhktmAqoPP3kflFjsaBR1PPr-lg%3D%3D&q=Sugar+And+Spice+Beauty+Bar+Reviews&sa=X&ved=2ahUKEwjz0ePbhZKRAxXoGTQIHUppEb8Q0bkNegQIIBAE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#d1b26f] text-black font-semibold px-8 py-4 rounded-2xl 
        shadow-[0_0_20px_rgba(209,178,111,0.4)] hover:shadow-[0_0_35px_rgba(209,178,111,0.6)]
        hover:bg-white transition-all duration-300"
              >
                ⭐ Read Our Google Reviews
              </motion.a>
            </div>
          </section>

          {/* ==== CORE VALUES ===== */}
          <section className="py-12 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="text-3xl sm:text-4xl font-[Ms Madi] text-[#d1b26f] text-center mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Our Core Values
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreValues.map((value, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-[#d1b26f]/50 rounded-3xl p-6 flex flex-col gap-4 shadow-[0_0_15px_rgba(209,178,111,0.15)] hover:shadow-[0_0_35px_rgba(209,178,111,0.4)] hover:scale-[1.03] transition-all duration-400"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx + 1}
                  >
                    <div className="flex items-center gap-4">
                      {value.icon}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#d1b26f]">
                        {value.title}
                      </h3>
                    </div>

                    <p className="text-[#f5e1a4] text-base sm:text-lg leading-relaxed">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
