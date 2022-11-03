import React from 'react';
import tw from 'tailwind-styled-components';

const DetailMainImg = ({ imageUrl }) => {
  return <MainImgBlock src={imageUrl}></MainImgBlock>;
};
const MainImgBlock = tw.img`
w-full
h-[205px]`;

export default DetailMainImg;
