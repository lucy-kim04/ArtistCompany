import React from 'react';
import Logo from '@/components/common/Button/logo';
import GNBFollow from '@/components/common/Button/sns';
import NavigationText from '@/components/common/Button/NavigationText';
import HamburgerMenu from '@/components/common/Button/HamburgerMenu';

export default function Header() {
  return (
    <>
      {/* 데스크톱 헤더 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm hidden sm:block pt-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="mx-4 sm:mx-8 lg:mx-12">
            <div className="flex justify-between items-center h-16 border-b border-[#e5e5e5]">
              <Logo />
              <NavigationText />
              <GNBFollow />
            </div>
          </div>
        </div>
      </header>

      {/* 모바일 헤더 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm sm:hidden pt-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="mx-4">
            <div className="h-[46px] flex justify-between items-center border-b border-[#e5e5e5] px-8 pb-8">
              <HamburgerMenu />
              <Logo />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
