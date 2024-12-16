'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HoverImage from './ImageChange';
import Sidebar from '@/app/components/Sidebar';

export default function Header(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-white h-16 flex fixed items-center w-screen z-30">
      <Link href="/HomePage">
        <Image src="/logo/arcaimperfLogo.png" alt="logo" width={150} height={57} className="ml-6 pt-2" />
      </Link>
      <button className="ml-auto mr-4" onClick={toggleSidebar}>
        <HoverImage />
      </button>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
}
