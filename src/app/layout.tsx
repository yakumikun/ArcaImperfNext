import React from 'react';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Arca Imperf',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-custom-pattern sm:bg-custom-pattern bg-fixed bg-cover bg-no-repeat bg-center h-screen m-0 p-0">
        <Header />
        <main className="overflow-y-scroll pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
