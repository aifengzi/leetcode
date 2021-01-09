/**
 * 本文件记录leetcode官网题库中'两数之和'题目的答案（仅属于自己联系和交流）。
 * leetcode网站: https://leetcode-cn.com/
 */

// 1、从给定整数数组中找到之和为指定值的两个数字
// 示例整数数组
const array = [1, 2, 3, 4, 5, 6, 7];

// 找到符合条件的两个数
const twoSum = (nums, target) => {
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const remainNum = target - num;
    const remainArray = [...nums];
    remainArray.splice(i ,1);
    const expectNumIndex = remainArray.findIndex((num) => num === remainNum);
    if (expectNumIndex !== -1) {
      result.push(i, expectNumIndex + 1);
      break;
    }
  }

  return result;
};

const result = twoSum(array, 8); // [1, 7]

// 2、从给定数组中找出所有符之和为指定值的数字组合
// 找到符合条件的两个数的所有组合
const getSomeNum = (array, m) => {
  const result = [];
  const hasExists = (arr) => {
    const matchedList = [...result].map(nums => nums.sort().join());

    return matchedList.some(item => item === arr.sort().join());
  };

  array.forEach((item, i) => {
    const remainNum = m - item;
    const remainArray = [...array];
    remainArray.splice(i ,1);
    const expectNum = remainArray.find((num) => num === remainNum);
    if (expectNum !== undefined && !hasExists([item, expectNum])) {
      result.push([item, expectNum])
    }
  });

  return result;
};
// 示例整数数组
const nums = [1, 2, 3, 4, 5, 6, 7];
const res = getSomeNum(nums, 8); // [ [ 1, 7 ], [ 2, 6 ], [ 3, 5 ] ]

// 3、扩展: 从给定整数数组中找出n个数字，使其和等于m
// TODO: 待补充