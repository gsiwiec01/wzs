import React from 'react';

const Purpose = (props) => (
  <div class="relative rounded-2xl">
    <img 
      src={props.img}
      class="w-full"
    />

    <div class="p-2 shadow-md border-2 border-t-0 border-gray-200">
      <div class="text-xl">{props.title}</div>
      <div class="text-xs">Operatorzy: {props.operators}</div>

      {props.children}
    </div>
  </div>
)

export default Purpose;