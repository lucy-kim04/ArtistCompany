'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SideMenu from '@/components/common/Header/Sidemenu';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  // 메뉴가 닫히면 호버 상태도 false로 리셋
  useEffect(() => {
    if (!isOpen) {
      setHovered(false);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`w-[46px] h-[46px] fixed top-5 left-5 z-50 cursor-pointer overflow-hidden ${
          isOpen ? 'opacity-0' : 'opacity-100'
        } transition-opacity`}
        onMouseEnter={() => !isOpen && setHovered(true)}
        onMouseLeave={() => !isOpen && setHovered(false)}
        onClick={() => setIsOpen(true)}
      >
        {/* 햄버거 3줄 (기본 상태) */}
        <AnimatePresence>
          {!hovered && !isOpen && (
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

        {/* 1줄 (hover or open 상태) */}
        <AnimatePresence>
          {(hovered || isOpen) && (
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

      {/* 사이드 메뉴 */}
      <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
