
/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

示例 1 :

输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

请注意，一些重复出现的子串要计算它们出现的次数。
 * 
 * 
 */

export default (str) => {
  
  // create data structure heap
  let arr = [];
  // given any subStr, get the one output
  let match = (str) => {
    let j=str.match(/^(0+|1+)/)[0]; // j 000 or 11
    let o = (j[0] ^ 1).toString().repeat(j.length);
    let reg = new RegExp(`^(${j}${o})`);
    if(reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }

  for(let i = 0, len = str.length - 1; i < len; i++) {
    let subStr = match(str.slice(i));
    if(subStr) {
      arr.push(subStr)
    }
  }

  return arr;
}