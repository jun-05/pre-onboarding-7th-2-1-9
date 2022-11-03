import React from 'react';
import tw from 'tailwind-styled-components';
import DetailInfo from './DetailInfo';
import DetailMainImg from './DetailMainImg';
import DetailMainInfo from './DetailMainInfo';

const DetailWrapper = ({ carInfo }) => {
  const { brand, name, imageUrl } = carInfo.attribute;

  return (
    <DetailWrapperBlock>
      <DetailMainImg imageUrl={imageUrl} />
      <DetailMainInfo brand={brand} carName={name} />
      <DetailInfo carInfo={carInfo} />
    </DetailWrapperBlock>
  );
};
const DetailWrapperBlock = tw.div`
flex
flex-col
`;

export default DetailWrapper;
