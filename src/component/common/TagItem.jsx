import React from 'react';
import tw from 'tailwind-styled-components';

const TagItem = ({ children, $active = false }) => {
  return <TagButtonBlock $active={$active}>{children}</TagButtonBlock>;
};

const TagButtonBlock = tw.button`
w-[62px]
h-[27px]
${p => (p.$active ? activeStyle : defaultStyle)}

shrink-0
rounded-full
ml-2
`;

const activeStyle = 'bg-black text-white ';
const defaultStyle = 'bg-gray text-black';

export default TagItem;
