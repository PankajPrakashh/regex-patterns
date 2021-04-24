import { RegexPatterns } from '../../typings';

export class NumberPatterns {

  static get wholeNumber() {
    return /^\d+$/;
  }

  static get wholeNumberWithSign() {
    return /^[\-|\+]?\d+$/;
  }

  static get decimal() {
    return /^\d*\.\d+$/;
  }
  static get decimalWithSign() { 
    return /^\d*\.\d+$/;
  }

  static get wholeDecimal() {
    return /^\d*(\.\d+)?$/;
  }
}

export class NumberPatternBuilder {

  /**
   * 
   * @param {RegexPatterns.IRange} magnitude 
   * @param {RegexPatterns.IRange} precision 
   * @param {boolean} allowSign 
   * @returns 
   */
  static decimal(magnitude, precision, allowSign = true) {
    return new RegExp(`^\d{${magnitude.min},${magnitude.max}}\.\d{${precision.min},${precision.max}}$`);
  }
}
