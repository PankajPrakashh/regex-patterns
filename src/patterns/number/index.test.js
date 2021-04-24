import { NumberPatterns } from '.';
import { TestData } from './test.data';

// Add your test cases here

describe('Number patterns', () => {

  describe('Whole numbers', () => {
    
    // Positive testing
    TestData.validWholeNumbers.forEach(n => {
      test(`${n} is a whole number`, () => {
        expect(NumberPatterns.wholeNumber.test(`${n}`)).toBeTruthy();
      });
    });
  
    // Negative testing
    TestData.invalidWholeNumbers.forEach(n => {
      test(`${n} is not a whole number`, () => {
        expect(NumberPatterns.wholeNumber.test(`${n}`)).toBeFalsy();
      });
    });
  });


});

// Add your test cases here
// const sum = require('./index');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });