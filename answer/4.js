/**
 * 本文件记录leetcode官网题库中'寻找两个正序数组的中位数'题目的答案（仅属于自己联系和交流）。
 * leetcode网站: https://leetcode-cn.com/
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const mergedNums = [...nums1, ...nums2].sort((a, b) => a- b);
  const numCount = mergedNums.length;
  if (numCount % 2 === 0) {
    const middle = numCount / 2;
    const prev = middle - 1;

    return (mergedNums[prev] + mergedNums[middle]) / 2;
  }

  return mergedNums[Math.floor(numCount / 2)];
};

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))