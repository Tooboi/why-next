import Link from 'next/link';
import Image from 'next/image';
import { UserButton, currentUser, auth } from '@clerk/nextjs';
import Logo from '../../../public/images/Logo.png';

export default async function Navbar() {
  const { userId } = auth();
  const user = await currentUser();
  // console.log(userId);

  return (
    <>
      <nav class="bg-stone-800 dark:bg-stone-900 fixed w-full z-20 top-0 start-0 border-b-2 border-stone-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={Logo} class="h-10 w-10" alt="WHY" />
            <span class="self-center text-4xl font-semibold whitespace-nowrap">W H Y</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-200 rounded-lg md:hidden hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-stone-700 rounded-lg bg-stone-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-stone-800">
              <li>
                <a href="/" class="block py-2 px-3 text-stone-200 rounded hover:bg-stone-700 active:bg-brand-500 md:hover:bg-transparent md:border-0 md:hover:text-brand-500 active:text-stone-50 md:p-0" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="/discover" class="block py-2 px-3 text-stone-200 rounded hover:bg-stone-700 active:bg-brand-500 md:hover:bg-transparent md:border-0 md:hover:text-brand-500 active:text-stone-50 md:p-0">
                  Discover
                </a>
              </li>
              <li>
                <a href="/about" class="block py-2 px-3 text-stone-200 rounded hover:bg-stone-700 active:bg-brand-500 md:hover:bg-transparent md:border-0 md:hover:text-brand-500 active:text-stone-50 md:p-0">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" class="block py-2 px-3 text-stone-200 rounded hover:bg-stone-700 active:bg-brand-500 md:hover:bg-transparent md:border-0 md:hover:text-brand-500 active:text-stone-50 md:p-0">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
