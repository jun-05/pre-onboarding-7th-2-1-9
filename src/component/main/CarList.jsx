import React from 'react';
import tw from 'tailwind-styled-components';
import CarItem from './CarItem';

const CarList = () => {
  return (
    <CarListWrapper>
      <CarItem />
      <CarItem />
      <CarItem />
      <CarItem isNew />
    </CarListWrapper>
  );
};
const CarListWrapper = tw.div`

`;

export default CarList;
