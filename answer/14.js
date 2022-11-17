/**
 * 本文件记录leetcode官网题库中'回文数'题目的答案（仅属于自己练习和交流）。
 * leetcode网站: https://leetcode-cn.com/
 */

/**
 * @param {array<string>} strs 需要判断的字符串数组
 * @return {string} 最长公共前缀
 */
const longestCommonPrefix = (strs = []) => {
  const sortedStrsByLength = strs.sort((a, b) => a.length - b.length);
  const [firstStr] = sortedStrsByLength;

  let maxPrefix = '';

  for (let i = 0; i < firstStr.length; i += 1) {
    const currentPrefix = firstStr.slice(0, i + 1);
    const isStartsWithCurrentPrefix = sortedStrsByLength.every(str => str.startsWith(currentPrefix));
    if (isStartsWithCurrentPrefix) {
      maxPrefix = currentPrefix;
    } else {
      break;
    }
  }

  return maxPrefix;
};

// test
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
