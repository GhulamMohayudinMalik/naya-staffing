'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Do not show the global Navbar and Footer on the admin dashboard and login pages
  const isHiddenRoute = pathname?.startsWith('/admin') || pathname?.startsWith('/login');

  return (
    <div className="flex flex-col min-h-screen">
      {!isHiddenRoute && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isHiddenRoute && <Footer />}
    </div>
  );
}
