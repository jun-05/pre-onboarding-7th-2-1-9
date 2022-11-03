import { removeDup } from './removeDup';

const setmentType = {
  C: '소형',
  D: '중형',
  E: '대형',
  SUV: 'SUV',
};

const fuelType = {
  gasoline: '가솔린',
  ev: '전기',
  hybrid: '하이브리드',
};

function getTagArr(carObj) {
  const allTag = carObj.reduce((acc, cur) => {
    let carInfo = cur.attribute;
    return [...acc, ['fuelType', carInfo.fuelType], ['segment', carInfo.segment]];
  }, []);

  const uniqueTag = removeDup(allTag);

  return uniqueTag;
}

function tagFiltering(carObj) {
  const allTag = getTagArr(carObj);
  const tagItem = allTag.map(tagArr => {
    if (tagArr[0] === 'fuelType') {
      return [...tagArr, fuelType[tagArr[1]]];
    } else if (tagArr[0] === 'segment') {
      return [...tagArr, setmentType[tagArr[1]]];
    }
    return null;
  });

  return tagItem;
}

export function getTagList(data) {
  const tag = tagFiltering(data);
  return tag;
}
