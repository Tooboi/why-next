import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
const inter = Inter({ subsets: ['latin'] });
import Script from 'next/script'

import SideNav from './components/Navbar/SideNav';

export const metadata = {
  title: 'WHY',
  description: 'Whole Healthy You',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#00bcc9',
          colorBackground: '#292524',
          colorTextOnPrimaryBackground: '#292524',
          colorTextSecondary: '#a8a29e',
          colorInputText: '#292524'
        },
      }}
    >
      <html lang="en" className="bg-stone-900 text-stone-200">
        <body className={inter.className}>
          <SideNav />
          <main className="">
            <div className="pt-24 pl-24 md:p-8 md:mt-14 md:ml-64 min-h-screen transition-all">
              <div className="">{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}