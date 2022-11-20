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



// 方案三： 从后往前，逆向双指针
// const merge = function(nums1, m, nums2, n) {
//   if (n === 0) {
//     return nums1;
//   }
//   if (m === 0) {
//     for (let i = 0;i < n; i += 1) {
//       nums1[i] = nums2[i];
//     }
//     return nums1;
//   }

//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;

//   for (; i >= 0 , j >= 0;) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i -= 1;
//     } else {
//       nums1[k] = nums2[j];
//       j -= 1;
//     }
//     k -= 1;
//   }

//   return nums1;
// };

// // test1
// const nums1 = [1,2,3,0,0,0];
// const nums2 = [2, 5, 6];
// const m= 3;
// const n = 3;
// console.log(merge(nums1, m, nums2, n))

// // test2
// const nums1 = [];
// const nums2 = [1];
// const m= 0;
// const n = 1;
// console.log(merge(nums1, m, nums2, n))

// // test3
// const nums1 = [2, 0];
// const nums2 = [1];
// const m= 1;
// const n = 1;
// console.log(merge(nums1, m, nums2, n))
