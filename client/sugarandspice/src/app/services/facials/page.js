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
      title: "Hydration Boost Facial",
      desc: "Replenish and deeply hydrate skin for a glowing, refreshed look.",
    },
    {
      title: "Brightening Facial",
      desc: "Restore radiance and even skin tone with brightening ingredients.",
    },
    {
      title: "Detoxifying Facial",
      desc: "Cleanse and purify skin to remove impurities and toxins.",
    },
    {
      title: "Collagen Facial",
      desc: "Stimulate collagen production for firmer, plumper skin.",
    },
    {
      title: "Luxury Gold Facial",
      desc: "Indulge in premium gold-infused treatments to rejuvenate your skin.",
    },
    {
      title: "Vitamin C Facial",
      desc: "Boost skin health and glow with a high-dose Vitamin C treatment.",
    },
    {
      title: "Enzyme Facial",
      desc: "Gentle exfoliation and rejuvenation using natural enzymes.",
    },
    {
      title: "Firming Facial",
      desc: "Lift and firm sagging skin for a youthful appearance.",
    },
    {
      title: "Customized Facial",
      desc: "Tailored to your skin type and unique concerns for maximum results.",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-black text-[#d1b26f] pt-24 min-h-screen px-4 sm:px-8 lg:px-16">
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
            className="w-full max-h-[28rem] sm:max-h-[32rem] lg:max-h-[36rem] rounded-4xl shadow-2xl border border-[#d1b26f] overflow-hidden"
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
              className="bg-[#1a1a1a] p-6 rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(209,178,111,0.6)] hover:scale-[1.02] transition-all duration-300"
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
      </main>
      <Footer />
    </>
  );
}
