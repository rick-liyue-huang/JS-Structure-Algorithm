
import subStr from '../../codes/string/string2';

test('subStr(00110011)', () => {
  expect(subStr('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})