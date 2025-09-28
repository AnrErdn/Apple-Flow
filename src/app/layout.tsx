import React from 'react';
import '@/app/style/global.css';
import Sidebar from './components/Sidebar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
