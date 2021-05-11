export class InternetPatterns {

  constructor() {
    throw new Error('Cannot instantiate static class');
  }

  /**
   * Matches a valid email 
   * @link https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
   */
  static get email() {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  }
  
  // Match youtube url
  // Hashtag
  // Url
}