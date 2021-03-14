import React from 'react';

const Item = ({ icon, title, content }) => (
  <>
    <div class="relative">
      <dt>
        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
          { icon }
        </div>
        <p class="ml-16 text-lg leading-6 font-medium text-gray-900 text-justify">
          { title }
        </p>
      </dt>

      <dd class="mt-2 ml-16 text-base text-gray-500 text-justify">
        { content } 
      </dd>
    </div>
  </>
)

export default Item;