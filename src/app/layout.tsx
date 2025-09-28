import React from 'react';
import '@/app/style/global.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='flex'>
        <Sidebar />
        <div className="flex-1 flex flex-col">  
          <Navbar />                            
          <main>{children}</main>              
        </div>
      </body>
    </html>
  );
}
