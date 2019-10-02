
import countBinarySubstrings from '../../code/string/string2'

test('countBinarySubstrings(00110011)', () => {
  expect(countBinarySubstrings('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})
