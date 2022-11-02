import React from 'react';
import tw from 'tailwind-styled-components';

const GlobalBackground = ({ children }) => {
  return <GlobalBackgroundWrapper>{children}</GlobalBackgroundWrapper>;
};

//TODO context 또는 reducer로 다크모드

const GlobalBackgroundWrapper = tw.div`

flex
flex-col
items-center

min-w-[360px]
w-screen

min-h-screen 
h-auto 
bg-white 
`;

export default GlobalBackground;
