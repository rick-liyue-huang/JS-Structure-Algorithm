//  Reverse Words in a String III

/**
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

  Example 1:

  Input: "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoc"
  Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 */

//  method one
/*
export default (str) => {
  // transfer the str to arry by ' ' space in word orders.
  let arr = str.split(' ')
  // traverse the array item, and reverse each item.
  let result = arr.map(item => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}
*/

// method two
/*
export default (str) => {
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
*/

// method three: regExp
/*
export default (str) => {
  return str.split(/\s/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
*/

// method four
export default (str) => {
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
