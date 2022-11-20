/**
* 本文件记录leetcode官网题库中'合并两个有序数组'题目的答案（仅属于自己练习和交流）。
* 当前题目地址: https://leetcode.cn/problems/merge-sorted-array/
* leetcode网站: https://leetcode-cn.com/
*/

// 方案一： 将nums2数组的元素全部插入到nums1中，然后对nums排序
const merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i += 1) {
    nums1[m + i] = nums2[i];
  }
  nums1 = nums1.sort((a, b) =>  { return a - b });

  return nums1;
};

// test
const nums1 = [1,2,3,0,0,0];
const nums2 = [2, 5, 6];
const m= 3;
const n = 3;
console.log(merge(nums1, m, nums2, n))



// 方案二： 新建一个数组（长度为 m + n），然后通过比较的方式把nums1 和 nums2的元素按照顺序插入新数组中
// const merge = function(nums1, m, nums2, n) {
//   const result = new Array();
//   let i = 0;
//   let j = 0;

//   for (; i < m && j < n;) {
//     if (nums1[i] < nums2[j]) {
//       result.push(nums1[i]);
//       i += 1;
//     } else {
//       result.push(nums2[j]);
//       j += 1;
//     }
//   }

//   if (i < m) {
//     for (let k = i; k < m; k += 1) {
//       result.push(nums1[k]);
//     }
//   } else if (j < n) {
//     for (let k = j; k < n; k += 1) {
//       result.push(nums2[k]);
//     }
//   }

//   result.forEach((item, index) => {
//     nums1[index] = item;
//   });

//   return nums1;
// };

// // test
// const nums1 = [1,2,3,0,0,0];
// const nums2 = [2, 5, 6];
// const m= 3;
// const n = 3;
// console.log(merge(nums1, m, nums2, n))