import React from 'react';
import tw from 'tailwind-styled-components';
import NewTagItem from '../common/NewTagItem';

const CarImg = ({ isNew }) => {
  return (
    <CarImgWrapper>
      {isNew && <NewTagItem>NEW</NewTagItem>}
      <CarImgBlock />
    </CarImgWrapper>
  );
};

const CarImgWrapper = tw.div`
flex
relative

h-[80px]
w-[152px]
`;

const CarImgBlock = tw.div`
w-full
h-full
bg-gray
`;

export default CarImg;
