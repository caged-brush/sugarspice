"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] cursor-pointer"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-[90%] max-w-3xl h-[80vh]"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt="preview"
          fill
          className="object-contain rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;
