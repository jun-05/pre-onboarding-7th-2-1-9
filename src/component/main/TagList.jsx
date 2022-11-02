import React from 'react';
import tw from 'tailwind-styled-components';
import TagItem from '../common/TagItem';

const TagList = () => {
  return (
    <TagListWrapper>
      <TagItem $active>Test</TagItem>
      <TagItem>Test</TagItem>
      <TagItem>Test</TagItem>
      <TagItem>Test</TagItem>

      <TagItem>Test</TagItem>
      <TagItem>Test</TagItem>
      <TagItem>Test</TagItem>
      <TagItem>Test</TagItem>
    </TagListWrapper>
  );
};
const TagListWrapper = tw.div`
flex


h-[39px]
w-full

py-[6px]
px-[12px]

border-b-[1px]
border-black

overflow-y-hidden
overflow-x-scroll
`;

export default TagList;
