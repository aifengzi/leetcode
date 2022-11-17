/**
 * 本文件记录leetcode官网题库中'回文数'题目的答案（仅属于自己练习和交流）。
 * leetcode网站: https://leetcode-cn.com/
 */

/**
 * @param {string} str 需要检查的字符串
 * @return {boolean} 是否符合规范
 */
 const isValid = (str) => { 
  const len = str.length;
  if (len % 2 !== 0 || len < 2) {
    return false;
  }

  const smallBraket = '()';
  const middleBraket = '[]';
  const bigBraket = '{}';
  let copyedStr = str;

  while (copyedStr.includes(smallBraket) || copyedStr.includes(middleBraket) || copyedStr.includes(bigBraket)) {
    copyedStr = copyedStr.replace(smallBraket, '')
      .replace(middleBraket, '')
      .replace(bigBraket, '');
  }

  return !copyedStr;
};

// test
console.log(isValid('()[]{}'));
console.log(isValid(')('));
console.log(isValid('[{}]'));