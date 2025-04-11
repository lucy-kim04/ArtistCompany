'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HamburgerMenu() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-[46px] h-[46px] relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 햄버거 3줄 */}
      <AnimatePresence>
        {!hovered && (
          <motion.div
            key="hamburger"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex flex-col justify-center items-center"
          >
            <span className="w-6 h-[2px] bg-black mb-2" />
            <span className="w-6 h-[2px] bg-black mb-2" />
            <span className="w-6 h-[2px] bg-black" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 가운데 줄 1개 */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="line"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <span className="w-6 h-[2px] bg-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
