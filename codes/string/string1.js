// 翻转字符串的单词

/**
 * 
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 * 
 */

//  notice seperate the sentence by words
// export default (str) => {
//   // split string to array
//   let array = str.split(' ');
//   let result = array.map(item => {
//     // string -> array -> string
//     return item.split('').reverse().join(''); 
//   })

//   return result.join(' ');
// }

// export default (str) => {
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ');
// };

// export default (str) => {
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ');
// }

export default (str) => {
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ');
}






