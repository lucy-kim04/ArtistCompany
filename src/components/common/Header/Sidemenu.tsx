'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import GNBFollow from '@/components/common/Button/sns';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ✅ 부드럽게 어두워지는 오버레이 */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={onClose}
          />

          {/* ✅ 왼쪽에서 슥 등장하는 사이드 메뉴 */}
          <motion.div
            className="fixed top-0 left-0 w-[300px] h-full bg-white z-[999]"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="p-8 flex flex-col h-full">
              {/* 메뉴 리스트 */}
              <nav className="flex flex-col gap-3 mt-5">
                {[
                  { name: 'Artist', href: '/artist' },
                  { name: 'Contents', href: '/contents' },
                  { name: 'Film', href: '/film' },
                  { name: 'Schedule', href: '/schedule' },
                  { name: 'Audition', href: '/audition' },
                ].map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    onClick={onClose}
                    className="block text-[24px] text-[#555555] hover:text-black transition-colors font-['Roboto','Noto_Sans_KR',sans-serif] tracking-[0.15em]"
                  >
                    {name}
                  </Link>
                ))}
              </nav>

              {/* SNS 링크 */}
              <div className="mt-20">
                <div className="border-t border-[#e5e5e5] pt-4 mb-4">
                  <p className="text-xs tracking-[0.2em] text-[#999999] mb-6">
                    SOCIAL NETWORK
                  </p>
                  <GNBFollow />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
