
// Letter Combinations of a Phone Number

/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

  A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
  Input: "23"
  Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
  Note:

  Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

export default (str) => {
//  build phone number map
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  //  transfer number string to number array '234' => [2, 3, 4]
  let num = str.split('')
  //  store the mapped letter content 23 => ["abc", "def"]
  let code = []
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  let comb = (arr) => {
  //  temprary variable to store the first two item combination result
    let tmp = []
    //  the most out loop to tranverse the the first item
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // replace the first two items with combined one
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)
}
