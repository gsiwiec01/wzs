import React from 'react';
import { Link } from 'gatsby';

const NavLinks = () => (
  <>
    <Link to="/" class="font-medium text-gray-500 hover:text-red-500">Strona główna</Link>
    <Link to="/purposes" class="font-medium text-gray-500 hover:text-red-500">Cele programu</Link>
    <Link to="/implemention" class="font-medium text-gray-500 hover:text-red-500">Wdrażanie projektów</Link>
  </>
)

export default NavLinks;