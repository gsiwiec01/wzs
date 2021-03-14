import React from 'react';

const SectionTemplate = ({ children, className, id, title }) => (
  <>
    <div class={`${className} relative py-10`} id={id}>
      <div class="max-w-7xl mx-auto relative z-10">
        { title &&
          <div class="text-center">
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              { title }
            </p>
          </div>
        }

        { children }
      </div>
    </div>
  </>
)

export default SectionTemplate;