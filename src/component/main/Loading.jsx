import React from 'react';
import tw from 'tailwind-styled-components';

const Loading = () => {
  return <LoadingBlock>불러오는중</LoadingBlock>;
};
const LoadingBlock = tw.div`
fixed

flex
justify-center
items-center

w-full
h-full

pb-[99px]

text-[17px]
font-bold
`;

export default Loading;
