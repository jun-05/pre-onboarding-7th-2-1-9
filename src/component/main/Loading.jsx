import React from 'react';
import tw from 'tailwind-styled-components';

const Loading = () => {
  return <LoadingBlock>불러오는중</LoadingBlock>;
};
const LoadingBlock = tw.div`
flex
justify-center
items-center

w-full

h-[120px]

text-[17px]
font-bold

overflow-y-hidden
`;

export default Loading;
