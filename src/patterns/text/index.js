export class TextPatterns {
  
  constructor() {
    throw new Error('Cannot instantiate static class');
  }

  /**
   * Matches all ascii characters
   * @link https://regexr.com/5sk6i
   */
  get asciiCharacters() {
    // eslint-disable-next-line no-control-regex
    return /[\x00-\x7F]*/;
  }

  /**
   * Matches all non-ascii characters
   * @link https://regexr.com/5sk69
   */
  get nonAsciiCharacters() {
    // eslint-disable-next-line no-control-regex
    return /[^\x00-\x7F]*/;
  }

  // Match words
  // Match sentences
}