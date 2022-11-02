import React from 'react';
import tw from 'tailwind-styled-components';
import CarImg from './CarImg';

//TODO 디폴트값 제거
const CarItem = ({ brand = '기아', name = 'EV6', segment = 'c', amount = '0', isNew }) => {
  return (
    <CarItemBlock>
      <CarInfoWrapper>
        <EmInfoContainer>
          <EmInfo>{brand}</EmInfo>
          <EmInfo>{name}</EmInfo>
        </EmInfoContainer>

        <DefaultInfoContainer>
          <DefaultInfo>{segment}</DefaultInfo>
          <DefaultInfo>월 {amount}원부터</DefaultInfo>
        </DefaultInfoContainer>
      </CarInfoWrapper>

      <CarImg isNew={isNew} />
    </CarItemBlock>
  );
};
const CarItemBlock = tw.div`
flex
items-center
justify-between

h-[120px]

p-5
border-b-[1px]
border-b-black
`;

const CarInfoWrapper = tw.div`

h-[80px]
py-1
`;

const EmInfoContainer = tw.div`
mb-2`;

const DefaultInfoContainer = tw.div`

`;

const EmInfo = tw.div`
h-[17px]
text-[14px]
font-bold
`;

const DefaultInfo = tw.div`
h-[15px]
text-[12px]
font-medium
`;

export default CarItem;
