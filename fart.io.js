// TODO(toiletjs): Use React. See #4 (v2).
class AbstractBaseFart {
  /**
   * Initializes farts.
   * @param {boolean=} opt_isWet Whether the fart is wet. (Optional)
   * @param {boolean=} opt_isSilentButDeadly Whether the fart is silent but deadly. (Optional)
   */
  constructor(opt_isWet, opt_isSilentButDeadly) {
    this.isWet = Boolean(opt_isWet);
    this.isSilentButDeadly = Boolean(opt_isSilentButDeadly);
  }
  
  /**
   * Farts.
   */
  fart() {}
}

class FatalFart extends Error {}

class Fart extends AbstractBaseFart {
  /**
   * Farts.
   */
  fart() {
    if (this.isSilentButDeadly) {
      // Output nothing for now...
      console.log('');
      // The fart becomes fatal after a 1.3 second MTTW (mean time to waft).
      setTimeout(() => {
        throw new FatalFart();
      }, 1300); 
    }
    if (this.isWet) {
      console.log('pfffffpfpfpffffff?');
    } else {
      console.log('poooOOOot.');
    }
  }
}

class Shart extends AbstractBaseFart {
  /**
   * Sharts.
   */
  fart() {
    // Note that this.isWet is not checked here as all sharts are considered wet.
    console.log('plfffffpfffpllffff');
  }
}
