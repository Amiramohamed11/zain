"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative h-80 w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-red-900 via-red-700 to-rose-500 rounded-lg mt-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-ping absolute top-1/3 left-1/4 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="animate-pulse absolute bottom-1/4 right-1/4 w-64 h-64 bg-white opacity-5 rounded-full"></div>
      </div>

      <motion.div
        className="z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          <span className="text-5xl "> زين التنموية</span>
          <br />
          <br />

          <span className="text-4xl  ">الشريك الأمثل لمشاريع المستقبل </span>
        </h1>
        <p className="text-sm md:text-lg">
          شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية.
          نقدم التميز في خدمات المقاولات والصيانة والخدمات المتخصصة{" "}
        </p>
      </motion.div>
    </div>
  );
}
