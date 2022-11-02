import React from 'react';
import tw from 'tailwind-styled-components';

const NotFoundCar = () => {
  return (
    <NotFoundCarBlock>
      <div>차량이 없습니다</div>
    </NotFoundCarBlock>
  );
};
const NotFoundCarBlock = tw.div`
fixed

flex
items-center
justify-center

w-screen
h-screen

pb-[99px]

text-[17px]
font-bold
`;

export default NotFoundCar;
