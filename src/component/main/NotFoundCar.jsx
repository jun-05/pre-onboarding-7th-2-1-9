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
flex
justify-center
items-center

w-full
h-[120px]



text-[17px]
font-bold

overflow-y-hidden
`;

export default NotFoundCar;
