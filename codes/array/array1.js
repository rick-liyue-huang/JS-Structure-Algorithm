import { ModuleMap } from "jest-haste-map";

/**
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 */


export default (str) => {

  // create number pad map
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  // transfer input str into array, 234=>[2, 3, 4]
  let num = str.split('');
  // store mapped content 23 => ['abc', 'def']
  let code = [];
  num.forEach(item => {
    if(map[item]) {
      code.push(map[item])
    }
  })

  let comb = (arr) => {
    // temp arr to store the first two item
    let tmp = [];
    // the outer loop the first item, the inner loop for the second item
    for(let i = 0, il = arr[0].length; i < il; i++) {
      for(let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp);
    if(arr.length > 1) {
      comb(arr)
    } else {
      return tmp;
    }
    return arr[0];
  }
  return comb(code);
}
