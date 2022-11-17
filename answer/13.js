/**
 * 本文件记录leetcode官网题库中'回文数'题目的答案（仅属于自己练习和交流）。
 * leetcode网站: https://leetcode-cn.com/
 */

/**
 * @param {string} str 需要转换的罗马数字
 * @return {number} 证书
 */
const romanToInt = (str) => {
  const chars = str.split('');
  const charCount = chars.length;
  const CharI = 'I';
  const CharV = 'V';
  const CharX = 'X';
  const CharL = 'L';
  const CharC = 'C';
  const CharD = 'D';
  const CharM = 'M';
  const romanNumberMap = {
    [CharI]: 1,
    [CharV]: 5,
    [CharX]: 10,
    [CharL]: 50,
    [CharC]: 100,
    [CharD]: 500,
    [CharM]: 1000,
  };
  let result = 0;

  for (let i = 0; i < charCount; i += 1) {
    const currentChar = chars[i];
  
    if (i <= charCount - 2) {
      const nextChar = chars[i + 1];

      if (currentChar === CharI && nextChar === CharV) {
        result += 4;
        i += 1;
      } else if (currentChar === CharI && nextChar === CharX) {
        result += 9;
        i += 1;
      } else if (currentChar === CharX && nextChar === CharL) {
        result += 40;
        i += 1;
      } else if (currentChar === CharX && nextChar === CharC) {
        result += 90;
        i += 1;
      } else if (currentChar === CharC && nextChar === CharD) {
        result += 400;
        i += 1;
      } else if (currentChar === CharC && nextChar === CharM) {
        result += 900;
        i += 1;
      } else {
        result += romanNumberMap[currentChar];
      }
    } else {
      result += romanNumberMap[currentChar];
    }
  }

  return result;
};

// test
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));