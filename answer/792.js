/**
* 本文件记录leetcode官网题库中'匹配子序列的单词数'题目的答案（仅属于自己练习和交流）。
* 当前题目地址: https://leetcode.cn/problems/number-of-matching-subsequences/
* leetcode网站: https://leetcode-cn.com/
*/

var numMatchingSubseq = function (s, words) {
  return words.filter(word => {
    const chars = word.split('');
    let preIndex = 0;
    for (let i = 0; i < chars.length; i += 1) {
      const index = s.indexOf(chars[i], preIndex);
      if (index === -1) {
        return false;
      }

      preIndex = index + 1;
    }

    return true;
  }).length;
};

// test
const s = 'abcde';
const words = ["a","bb","acd","ace"]
console.log(numMatchingSubseq(s, words))
