import './globals.css';
import { Rubik } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
const rubik = Rubik({ subsets: ['latin'] });

import Nav from './components/Navbar/Navbar';
import Script from 'next/script';

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
        <body className={rubik.className}>
          <Nav />
          <main className="">
            <div className="pt-16 p-8 md:mt-16 mt-16 min-h-screen transition-all">
              <div className="">{children}</div>
            </div>
          </main>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></Script>
        </body>
      </html>
    </ClerkProvider>
  );
}
