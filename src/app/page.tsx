'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Waves from '@/app/components/Waves';
import Ship from '@/app/components/Ship';
import Logo from '@/app/components/Logo';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/HomePage');
    }, 8000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ overflow: 'hidden', height: '100vh', position: 'relative' }} className="bg-white h-screen w-screen">
      <Waves />
      <Ship />
      <Logo />
    </div>
  );
}
