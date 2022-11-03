import React from 'react';
import tw from 'tailwind-styled-components';
import TagItem from '../common/TagItem';
import { getTagList } from './../../utils/tag';
import { useDispatch, useSelector } from 'react-redux';
import { chnageTag } from '../../modules/tag/actions';

const TagList = ({ carList, getCarFn }) => {
  const dispatch = useDispatch();
  const { tagNumber } = useSelector(state => state.tag);
  const tagItem = getTagList(carList);

  const onClickTag = (idx, tagInfo) => {
    if (tagNumber === idx) {
      return;
    } else if (!tagInfo) {
      getCarFn();
    } else {
      getCarFn({ [tagInfo[0]]: tagInfo[1] });
    }
    dispatch(chnageTag(idx));
  };

  return (
    <TagListWrapper>
      <TagItem $active={tagNumber === 0} onClick={() => onClickTag(0)}>
        전체
      </TagItem>
      {tagItem.map((tagInfo, idx) => (
        <TagItem
          onClick={() => onClickTag(idx + 1, tagInfo)}
          $active={idx + 1 === tagNumber}
          key={`tag_${idx}`}
        >
          {tagInfo[2]}
        </TagItem>
      ))}
      <TagItem $active={tagNumber === 6} onClick={() => onClickTag(6, ['segment', 'E'])}>
        대형
      </TagItem>
    </TagListWrapper>
  );
};

export default TagList;

const TagListWrapper = tw.div`
flex

h-[39px]
w-full

py-[6px]
px-[12px]

border-b-[1px]
border-black

overflow-y-hidden
overflow-x-hidden

hover:overflow-x-auto
`;
