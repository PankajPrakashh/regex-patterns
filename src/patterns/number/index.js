export class NumberPatterns {

  constructor() {
    throw new Error('Cannot instantiate static class');
  }

  /**
   * Matches all whole numbers with sign
   * @link https://regexr.com/5sk2q
   */
  static get wholeNumber() {
    return /^\+?\d+$/;
  }

  /**
   * Matches all whole numbers with decimals
   * @link https://regexr.com/5sk3f
   */
  static get wholeNumberDecimal() {
    return /^\+?\d*\.\d+$/;
  }

  /**
   * Matches all negative and positive decimal numbers
   * @link https://regexr.com/5sk3r
   */
  static get decimal() {
    return /^[\+\-]?\d*\.\d+$/;
  }

  /**
   * Matches all negative decimal numbers
   * @link https://regexr.com/5sk4j
   */
  static get negativeDecimals() {
    return /^\-\d*\.\d+$/;
  }

  /**
   * Matches all positive and negative integers
   * @link https://regexr.com/5sk41
   */
  static get integer() {
    return /^[\+\-]?\d+$/;
  }

  /**
   * Matches all negative integers
   * @link https://regexr.com/5sk4p
   */
  static get negativeInteger() {
    return /^\-\d+$/;
  }

  /**
   * Matches a javascript floating point number 
   * @link https://regexr.com/4m8tu
   */
  static get floatingPointNumber() {
    return /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/;
  }

  /**
   * Matches a roman numeral
   * @link https://regexr.com/5slgu
   * @source https://stackoverflow.com/a/267405/2401088
   */
  static get romanNumeral() {
    return /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  }

  // Binary numeral
  // Hexadecimal numeral
  // Octal numeral
}
