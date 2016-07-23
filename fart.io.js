class AbstractBaseFart {
  /**
   * Initializes farts.
   * @param {boolean=} opt_isWet Whether the fart is wet. (Optional)
   */
  constructor(opt_isWet) {
    this.isWet = Boolean(opt_isWet);
  }
  
  /**
   * Farts.
   */
  fart() {}
}

class Fart extends AbstractBaseFart {
  /**
   * Farts.
   */
  fart() {
    if (this.isWet) {
      console.log('pfffffpfpfpffffff?');
    } else {
      console.log('poooOOOot.');
    }
  }
}
