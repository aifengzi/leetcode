/**
 * 本文件记录leetcode官网题库中'无重复字符的最长子串'题目的答案（仅属于自己联系和交流）。
 * leetcode网站: https://leetcode-cn.com/
 */

 /**
  * 获取指定长度的子串
  * @param {String} s 字符串
  * @param {Number} len 子串长度
  */
const getSubstrList = (s, len) => {
  if (!s) {
    return [];
  }

  if (s.length === len) {
    return [s];
  }

  const result = [];
  for(let i = 0; i <= s.length - len; i += 1) {
    result.push(s.substr(i, len));
  }

  return result;
};

/**
 * 筛选没有重复字符的的子串列表
 * @param {Array<String>} list 子串列表
 */
const filterSubstrList = (list = []) => {
  const result = list.filter((str) => {
    const set = new Set(str.split(''));
    return set.size === str.length;
  });

  return result;
};

/**
 * 获取最长无重复字符的子串的长度
 * @param {String} s 字符串
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) {
    return 0;
  }

  let max = 1;
  const len = s.length;
  for (let i = len; i > 1; i -= 1) {
    const substrList = getSubstrList(s, i);
    const matchedSubstrList = filterSubstrList(substrList);
    if (matchedSubstrList.length) {
      max = matchedSubstrList[0].length;
      break;
    }
  }

  return max;
};


const res = lengthOfLongestSubstring('abcabcbb') // 3
