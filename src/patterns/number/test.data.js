const validWholeNumbers = [ 0, 99999999, 12, '0000000000' ];
const invalidWholeNumbers = [ -1, -35.1, 'a', '-999999999', null, undefined, '0.0', 0.01, 9.99 ];
const validWholeNumbersWithSign = [ ...validWholeNumbers, +0, +99999999, +12, '+0000000000' ];
const invalidWholeNumbersWithSign = [ ...invalidWholeNumbers, -1, '-0', -99, '-a', '+a', '-999999999' ];

export const TestData = {
  validWholeNumbers, 
  invalidWholeNumbers,
  validWholeNumbersWithSign,
  invalidWholeNumbersWithSign,
};

