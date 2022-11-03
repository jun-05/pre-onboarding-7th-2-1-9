export function isNewValidate(createAt) {
  const VALID_DATE = 24 * 60 * 60 * 1000;

  const createdDate = new Date(createAt).getTime();
  const nowDate = Date.now();

  return nowDate - createdDate < VALID_DATE;
}

const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

export const convertUsableDate = dates => {
  const startDate = new Date(dates);
  const month = startDate.getMonth() + 1;
  const date = startDate.getDate();
  const dayName = days[startDate.getDay()];
  return month + '월 ' + date + '일' + ` (${dayName})`;
};
