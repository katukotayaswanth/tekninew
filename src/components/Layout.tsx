import React from 'react';
import { useLocation } from 'react-router-dom'; // <-- to detect the page
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

const isContactPage = location.pathname === '/contact-us' || 
location.pathname === '/contact' || 
location.pathname.includes('/contact');

  return (
    <div className="min-h-screen bg-[#020817]">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>

      {/* Hide Footer fully on Contact page */}
      {!isContactPage && (
        <Footer />
      )}
    </div>
  );
}
