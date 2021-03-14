import React from "react"
import { Link } from 'gatsby';
import NavLinks from '../components/NavLinks';

const Navigation = () => (
  <>
    <div class="absolute w-full px-4">
      <nav class="relative flex items-center justify-between py-6">
        <div class="flex items-between flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full">
            Fundusze Norweskie i EOG
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <NavLinks />
        </div>
      </nav>
    </div>
  </>
)

export default Navigation;