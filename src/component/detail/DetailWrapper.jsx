import React from 'react';
import tw from 'tailwind-styled-components';
import DetailInfo from './DetailInfo';
import DetailMainImg from './DetailMainImg';
import DetailMainInfo from './DetailMainInfo';

const DetailWrapper = () => {
  return (
    <DetailWrapperBlock>
      <DetailMainImg />
      <DetailMainInfo />
      <DetailInfo />
    </DetailWrapperBlock>
  );
};
const DetailWrapperBlock = tw.div`

flex
flex-col

`;

export default DetailWrapper;
