"use client";
import Header from "@/component/header";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/component/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function FacialsPage() {
  const treatments = [
    {
      title: "Microneedling",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/178",
      desc: "Microneedling, also known as Collagen Induction Therapy, was founded by Dr. Des Fernandes, the pioneer of microneedling and founder of ENVIRON skin care. This is a minimally invasive cosmetic procedure involving the use of INNOpen device equipped with fine needles to create tiny controlled punctures (micro injuries) into the top layer of the skin. These micro injuries stimulate the body's natural wound healing process, increasing collagen and elastic production resulting in smoother, firmer, more even toned skin.",
      duration: "90 min",
      price: "$375.00",
    },
    {
      title: "Skin Consult/Permantnet Makeup",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/206",
    },
    {
      title: "Alginate Mask Add On",
      desc: "Enchances the penetration of medical grade actives using patented micro-current DF machine technology.",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/226",
    },
    {
      title: "FORLLE'D 60 minute Focus Facial",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/257",
      desc: "Japanese skin care based on nobel prize winning technology. This 60 minute Focus facial includes a double clense, a treatment mask of choice, a neck and shoulder massage, finishing products and your choice of ONE add on. ADD ON OPTIONS 1. Cryostick Lymphatic Massage 2. Firming lip and eyes mask treatment.",
      duration: "60 min",
      price: "$160.00",
    },
    {
      title: "FORLLE'D 75 minute ESSENTIAL Facial",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/258",
      desc: "Forlle'd is a luxury Japanese skin care based on nobel prize winning technology. This 75 minute Essential facial includes a double cleanse, a treatment mask of choice, 25 minute neck, shoulder and face massage, finishing products and your choice of TWO add ons. ADD ON OPTIONS 1. Dermaplane 2. Cryostick Lymphatic Massage 3. Firming lip and eye mask treatment.",
      duration: "75 min",
      price: "$260.00",
    },
    {
      title: "FORELLE'D 90 minute LUXURY Facial",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/259",
      desc: "Forlle'd is a luxury Japanese skin care based on nobel prize winning technology. This 90 minute Luxury facial includes a double cleanse, a treatment mask of choice, 25 minute neck, shoulder and face massage, finishing products, Dermaplane, Cryostick Lymphatic Massage and Firming lip and eye mask treatment.",
      duration: "90 min",
      price: "$258.00",
    },
    {
      title: "ENVRON 60 minute FOCUS Treatment",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/260",
      desc: "Environ medical grade skin care combined with patented micro-current DF machine technology infuses award winning active ingredients into the deepest layers of the skin for profound results. This 60 minute Focus treatment includes a triple cleanse, a micro-current vitamin infusion, finishing products and extractions if required and ONE add on option. ADD ON OPTION 1. Lactic Acid Peel 2. Salicylic Acid Vitamin C Peel 3. Acupressure Massage",
      duration: "60 min",
      price: "$165.00",
    },
    {
      title: "ENVIRON 75 minute ESSENTIAL Treatment",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/261",
      desc: "Environ medical grade skin care combined with patented micro-current DF machine technology infuses award winning active ingredients into the deepest layers of the skin for profound results. This 75 minute Essential treatment includes a triple cleanse, a micro-current vitamin infusion, an Alginate mask, finishing products and extractions if required, hand and arm massage and ONE add on option. ADD ON OPTION 1. Lactic Acid Peel 2. Salicylic Acid 3. Acupressure Massage",
      duration: "75 min",
      price: "$220.00",
    },
    {
      title: "ENVIRON 90 minute LUXURY Treatment",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/262",
      desc: "Environ medical grade skin care combined with patented micro-current DF machine technology infuses award winning active ingredients into the deepest layers of the skin for profound results. This 90 minute Luxury treatment includes a triple cleanse, a micro-current vitamin infusion, an Alginate mask, finishing products and extractions if required, hand and arm massage, professional peel of choice, Cryostick Lymphatic massage.",
      duration: "90 min",
      price: "$265.00",
    },
    {
      title: "60 minute PEEL",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/263",
      desc: "Environ medical grade skin care combined with patented micro-current DF machine technology infuses award winning active ingredients into the deepest layers of the skin for profound results. This 60 minute PEEL includes a triple cleanse, a micro-current vitamin infusion, Peel of choice, finishing products, acupressure massage and extractions if required.",
      duration: "60 min",
      price: "$145.00",
    },
    {
      title: "Dermaplane Facial",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/264",
      desc: "Environ medical grade skin care combined with patented micro-current DF machine technology infuses award winning active ingredients into the deepest layers of the skin for profound results. This 30 minute Dermaplane treatment includes a double cleanse, dermaplane, hydrating clay mask and finishing products.",
      duration: "30 min",
      price: "$95.00",
    },
    {
      title: "Package of 3 microneedling",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/265",
      desc: "3 sessions and receive $200 towards skincare or treatment add-ons",
      duration: "105 min",
      price: "$1,182.00",
    },
    {
      title: "6 Session Microneedling Package",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/266",
      desc: "6 sessions and receive $400 towards skincare or treatment add-ons",
      duration: "105 min",
      price: "$2,823.00",
    },
    {
      title: "Focus on Back Treatment",
      href: "https://sugarandspicebeautybar.janeapp.com/#/discipline/1/treatment/267",
      desc: "This tension relieving Back Facial includes a cleanse, scrub. hot towels, extractions, masque and relaxing massage.",
      duration: "60 min",
      price: "$150.00",
    },
  ];

  return (
    <>
      <Header />
      <main
        className="relative bg-black text-[#d1b26f] pt-24 min-h-screen px-4 sm:px-8 lg:px-16 overflow-hidden bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/assets/images/5.png')",
        }}
      >
        {/* Soft dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto text-center mb-12">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-[Ms Madi] font-bold mb-4 drop-shadow-[0_2px_4px_rgba(209,178,111,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Facials & Skin Care
            </motion.h1>
            <motion.div
              className="w-20 sm:w-24 h-1 bg-[#d1b26f] mx-auto mb-6 rounded-full animate-pulse"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-[#f5e1a4]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Experience the ultimate self-care ritual at Sugar & Spice. Our
              facial treatments are tailored to nourish, rejuvenate, and reveal
              your skin’s natural radiance.
            </motion.p>
          </section>

          {/* Luxury Banner Image */}
          <section className="max-w-7xl mx-auto mb-12">
            <motion.div
              className="w-full max-h-[28rem] sm:max-h-[32rem] lg:max-h-[36rem] rounded-4xl shadow-2xl border border-[#d1b26f]/40 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/images/0K6A0244-1 copy.jpg"
                alt="Luxury facial treatment"
                className="w-full h-full object-contain object-center"
              />
            </motion.div>
          </section>

          {/* Treatments Grid */}
          <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {treatments.map((t, i) => (
              <motion.div
                key={i}
                className="bg-[#1a1a1a]/80 p-6 rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(209,178,111,0.6)] hover:scale-[1.02] transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i + 1}
              >
                {t.href ? (
                  <Link
                    href={t.href}
                    className="text-[#d1b26f] hover:text-white font-bold text-lg sm:text-xl underline transition-colors duration-200"
                  >
                    {t.title}
                  </Link>
                ) : (
                  <span className="text-[#d1b26f] font-bold text-lg sm:text-xl">
                    {t.title}
                  </span>
                )}
                {t.duration && t.price && (
                  <p className="mt-1 text-[#f5e1a4] font-semibold text-sm sm:text-base">
                    {t.duration} -{" "}
                    <span className="text-[#d1b26f]">{t.price}</span>
                  </p>
                )}
                <p className="mt-2 text-[#f5e1a4] text-sm sm:text-base leading-relaxed">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </section>

          {/* Call to Action */}
          <section className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="https://sugarandspicebeautybar.janeapp.com/"
                className="inline-block px-6 sm:px-8 py-3 bg-[#d1b26f] text-black font-bold rounded-full hover:bg-gradient-to-r hover:from-[#d1b26f] hover:to-[#f5e1a4] transition-all duration-300 shadow-lg"
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
