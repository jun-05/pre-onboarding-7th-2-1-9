import React from 'react';
import tw from 'tailwind-styled-components';
import NewTagItem from '../common/NewTagItem';

const CarImg = ({ imageUrl, isNew }) => {
  return (
    <CarImgWrapper>
      {isNew && <NewTagItem>NEW</NewTagItem>}
      <CarImgBlock src={imageUrl} alt="carInfo"></CarImgBlock>
    </CarImgWrapper>
  );
};

const CarImgWrapper = tw.div`
flex
relative

h-[80px]
w-[152px]
`;

const CarImgBlock = tw.img`
w-full
h-full
`;

export default CarImg;
