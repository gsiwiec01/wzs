import React from 'react';
import { Link } from 'gatsby';
import NavLinks from '../components/NavLinks';

const Footer = () => (
  <>
    <div class="text-white bg-gray-900 py-3 px-4">      
      <nav class="relative flex items-center justify-between mx-auto max-w-7xl">
        <div class="flex items-between flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="text-xs w-full">
            Gabriel Siwiec, Magdalena Wojtyła, Witold Woźniczka<br />
            Zdjęcia i tło:
            <a href="https://www.pexels.com/" target="blank"> www.pexel.com</a> 
            <a href="https://pl.freepik.com/wektory/tlo" target="blank"> pl.freepik.com</a><br/>
            2021 &copy; Wszelkie prawa zastrzeżone
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <NavLinks />
        </div>
      </nav>
    </div>
  </>
)

export default Footer;