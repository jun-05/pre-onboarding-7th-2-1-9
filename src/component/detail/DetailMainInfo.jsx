import React from 'react';
import tw from 'tailwind-styled-components';

const MainInfo = ({ brand, carName }) => {
  return (
    <MainInfoBlock>
      <BrandNameBlock>{brand}</BrandNameBlock>
      <CarNameBlock>{carName}</CarNameBlock>
    </MainInfoBlock>
  );
};
const MainInfoBlock = tw.div`
flex
flex-col

h-[92px]

p-5
`;

const BrandNameBlock = tw.div`
h-[24px]
text-[20px]
font-bold
`;

const CarNameBlock = tw.div`
h-[29px]
text-[24px]
font-bold
`;

export default MainInfo;
