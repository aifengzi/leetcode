/**
 * 本文件记录leetcode官网题库中'两数相加'题目的答案（仅属于自己联系和交流）。
 * leetcode网站: https://leetcode-cn.com/
 */

/**
 * 单向链表定义
 * @param {Number} val 节点值
 * @param {ListNode/null} next 下一个节点
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * 从单向链表中获得每一个节点的值(数字)
 * @param {ListNode/null} node 节点
 */
const getNumsInListNode = (node) => {
  const result = [];
  let next = node;

  while (next !== null) {
    result.push(next.val);
    next = next.next;
  }

  return result;
};

/**
 * 将从链表中获取的数字组合成数字
 * @param {Array<Number>} array 从链表中获取的每一项数字组成的数组。按节点书序排列
 */
const createNum = (array = []) => {
  array.reverse();

  const pow = (base, times) => {
    let result = BigInt(1);

    for (let i = BigInt(0); i < BigInt(times); i += BigInt(1)) {
      result *= base;
    }

    return result;
  }

  let sum = BigInt(0);
  array.forEach((num, i) => {
    sum += BigInt(num) * pow(BigInt(10), BigInt(array.length - 1 - i));
  });

  return sum;
};

/**
 * 根据数字生成链表
 * @param {Number} num 需要生成链表的数字
 */
const createLinkList = (num) => {
  const nums = `${num}`.split('').map(n => Number(n));
  const node = new ListNode(nums[0]);
  let next = node;
  for (let i = 1; i < nums.length; i += 1) {
    next.next = new ListNode(nums[i]);
    next = next.next;
  }

  return node;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const l1Numlist = getNumsInListNode(l1);
  const l2Numlist = getNumsInListNode(l2);

  const num1 = createNum(l1Numlist);
  const num2 = createNum(l2Numlist);
  const num = `${BigInt(num1 + num2).toString()}`.split('').reverse().join('');
  return createLinkList(num);
};

const l1 = createLinkList(1000000000000000000000000000001n);
const l2 = createLinkList(564);
const a = addTwoNumbers(l1, l2);
console.log(a)
