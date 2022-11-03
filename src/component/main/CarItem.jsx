import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { isNewValidate } from '../../utils/date';
import CarImg from './CarImg';

//TODO 디폴트값 제거
const CarItem = ({ carInfo }) => {
  const { id, amount, createdAt } = carInfo;
  const { brand, name, segment, imageUrl } = carInfo.attribute;

  return (
    <CarItemLinkBlock to={`detail/${id}`}>
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

      <CarImg imageUrl={imageUrl} isNew={isNewValidate(createdAt)} />
    </CarItemLinkBlock>
  );
};
const CarItemLinkBlock = tw(Link)`
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
