import React from 'react';
import tw from 'tailwind-styled-components';

const DetailInfo = ({ carInfo }) => {
  return (
    <DetailInfoBlock>
      <InfoBlock>
        <div></div>
        <div>월 ~~원</div>
      </InfoBlock>
      <InfoBlock $title>
        <div>차량정보</div>
        <div></div>
      </InfoBlock>
      <InfoBlock>
        <div>차종</div>
        <div>중형</div>
      </InfoBlock>
      <InfoBlock>
        <div>연료</div>
        <div>가솔린</div>
      </InfoBlock>
      <InfoBlock>
        <div>이용가능일</div>
        <div>~~부터</div>
      </InfoBlock>
      <InfoBlock $title>
        <div>보험</div>
        <div></div>
      </InfoBlock>
      <InfoBlock>
        <div>대인</div>
        <div>무한</div>
      </InfoBlock>
      <InfoBlock>
        <div>대물</div>
        <div>10억</div>
      </InfoBlock>
      <InfoBlock $title>
        <div>추가상품</div>
        <div></div>
      </InfoBlock>
      <InfoBlock>
        <div>하이파킹 주차권</div>
        <div>월 13000원</div>
      </InfoBlock>
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
