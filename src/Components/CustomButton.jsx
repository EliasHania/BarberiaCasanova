// CustomButton.js

import React from 'react';

const CustomButton = ({ href, children }) => (
  <a
    href={href}
    role="link"
    className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-custom-yellow border-gray-600 focus:ring-yellow-500/80 text-md hover:bg-yellow hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus:ring focus:ring-white focus:ring-offset-2 active:bg-black"
  >
    {children}
  </a>
);

export default CustomButton;
