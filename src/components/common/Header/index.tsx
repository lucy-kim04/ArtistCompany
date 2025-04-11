import React from 'react';
import Logo from '@/components/common/Button/logo';
import GNBFollow from '@/components/common/Button/sns';
import NavigationText from '@/components/common/Button/NavigationText';

export default function Header() {
  return (
    <header className="fixed top-[60px] left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mx-4 sm:mx-8 lg:mx-12">
          <div className="flex justify-between items-center h-16 border-b border-[#e1e1e1]">
            <Logo />
            <NavigationText />
            <GNBFollow />
          </div>
        </div>
      </div>
    </header>
  );
}
