const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * 
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'number' || typeof sampleActivity === 'object' || typeof sampleActivity === 'boolean' || typeof sampleActivity === 'undefined' || typeof parseInt(sampleActivity) === NaN) {
    return console.log(false);
  } else {
    let t = (Math.log(MODERN_ACTIVITY / parseInt(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD);
    return console.log(Math.round(t));
  }

}

module.exports = {
  dateSample
};

dateSample('1');