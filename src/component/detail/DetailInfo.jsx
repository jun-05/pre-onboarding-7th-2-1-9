import React from 'react';
import tw from 'tailwind-styled-components';
import { convertUsableDate } from '../../utils/date';

const DetailInfo = ({ carInfo }) => {
  const { additionalProducts, amount, startDate, insurance } = carInfo;
  const { segment, fuelType } = carInfo.attribute;

  return (
    <DetailInfoBlock>
      <InfoBlock>
        <div></div>
        <div>월 {amount}원</div>
      </InfoBlock>
      <InfoBlock $title>
        <div>차량정보</div>
        <div></div>
      </InfoBlock>
      <InfoBlock>
        <div>차종</div>
        <div>{segment}</div>
      </InfoBlock>
      <InfoBlock>
        <div>연료</div>
        <div>{fuelType}</div>
      </InfoBlock>
      <InfoBlock>
        <div>이용가능일</div>
        <div>{convertUsableDate(startDate)} 부터</div>
      </InfoBlock>
      {insurance && (
        <InfoBlock $title>
          <div>보험</div>
          <div></div>
        </InfoBlock>
      )}
      {insurance?.map((insuranceItem, idx) => (
        <InfoBlock key={`insuranceItem_${idx}`}>
          <div>{insuranceItem.name}</div>
          <div>{insuranceItem.description}</div>
        </InfoBlock>
      ))}
      {additionalProducts.length > 0 && (
        <InfoBlock $title>
          <div>추가상품</div>
          <div></div>
        </InfoBlock>
      )}
      {additionalProducts.map((addItem, idx) => (
        <InfoBlock key={`addItem_${idx}`}>
          <div>{addItem.name}</div>
          <div>월 {addItem.amount}원</div>
        </InfoBlock>
      ))}
    </DetailInfoBlock>
  );
};

const DetailInfoBlock = tw.div`
flex
flex-col
`;

const InfoBlock = tw.div`
flex
justify-between
items-center

w-full
h-12

py-[13px]
px-5

[&>div:first-child]:font-bold

${p => (p.$title ? titleStyle : defaultStyle)}

`;

const titleStyle = 'bg-blue text-white';
const defaultStyle = 'text-black';

export default DetailInfo;
