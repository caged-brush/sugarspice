"use client";
import React, { useState } from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Lightbox from "@/component/lightbox";

const page = () => {
  const categories = ["All", "Brows", "Lashes", "Facials", "Studio"];

  const photos = [
    { src: "/assets/images/brow.jpg", category: "Brows" },
    { src: "/assets/images/brow2.jpg", category: "Brows" },
    { src: "/assets/images/brow3.jpg", category: "Brows" },

    { src: "/assets/images/dramatic_lashes.jpg", category: "Lashes" },
    { src: "/assets/images/lash_removal.jpg", category: "Lashes" },

    { src: "/assets/images/facial.jpg", category: "Facials" },
    { src: "/assets/images/facial2.jpg", category: "Facials" },

    { src: "/assets/images/sugarspice_01.jpg", category: "Studio" },
    { src: "/assets/images/sugarspice_003.jpg", category: "Studio" },
    { src: "/assets/images/sugarspice_051.jpg", category: "Studio" },
    { src: "/assets/images/sugarspice_112.jpg", category: "Studio" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />

      <main
        className="relative bg-black text-[#d1b26f] pt-24 min-h-screen px-4 sm:px-8 lg:px-16 overflow-hidden bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/assets/images/6.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        {/* Title */}
        <div className="relative z-10">
          <section className="max-w-6xl mx-auto text-center mb-12">
            <motion.h1
              className="text-6xl font-[Ms Madi] font-bold drop-shadow-[0_2px_4px_rgba(209,178,111,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Gallery
            </motion.h1>
          </section>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border border-[#d1b26f] transition
                ${
                  activeCategory === cat
                    ? "bg-[#d1b26f] text-black"
                    : "text-[#d1b26f] hover:bg-[#d1b26f]/20"
                }
              `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry */}
          <section className="max-w-7xl mx-auto pb-20">
            <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
              <AnimatePresence>
                {filteredPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.src}
                    className="relative mb-6 break-inside-avoid overflow-hidden rounded-xl shadow-xl cursor-pointer group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setLightboxImage(photo.src)}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      width={800}
                      height={1200}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxImage && (
              <Lightbox
                image={lightboxImage}
                onClose={() => setLightboxImage(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
