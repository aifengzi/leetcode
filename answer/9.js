/**
 * 本文件记录leetcode官网题库中'回文数'题目的答案（仅属于自己练习和交流）。
 * leetcode网站: https://leetcode-cn.com/
 */

/**
 * @param {number} x 需要检查的数字
 * @return {boolean} 是否回文数字
 */
const isPalindrome = (x) => {
  const str = `${x}`;

  return str === str.split('').reverse().join('');
};