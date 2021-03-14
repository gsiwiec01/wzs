import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const MainTemplate = ({ children }) => (
  <>
    <div class="relative bg-white overflow-hidden">
      <div class="relative z-10 bg-white">
        <div class="max-w-7xl relative mx-auto">
          <Navigation />
        </div>

        { children }

        <Footer />
      </div>
    </div>
  </>
)

export default MainTemplate;