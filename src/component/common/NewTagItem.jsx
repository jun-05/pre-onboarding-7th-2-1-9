import React from 'react';
import tw from 'tailwind-styled-components';

const NewTagItem = ({ children }) => {
  return <NewTagItemBlock>{children}</NewTagItemBlock>;
};
const NewTagItemBlock = tw.button`
absolute
-top-2
-right-2

w-[52px]
h-[22px]
bg-blue 
text-white 
text-[12px]
rounded-full
`;

export default NewTagItem;
