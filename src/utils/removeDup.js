export function removeDup(arr) {
  return [...new Set(arr.join('|').split('|'))].map(v => v.split(',')).map(v => v.map(a => a));
}

/**
 * 소스 출처 :
 * https://velog.io/@star-ho/javascript-remove-duplicates-from-a-two-dimensional-array-2%EC%B0%A8%EC%9B%90%EB%B0%B0%EC%97%B4-%EC%A4%91%EB%B3%B5-%EC%A0%9C%EA%B1%B0
 *
 */
