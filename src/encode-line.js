const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  for(let i = 0; i<arr.length; i++) {
    let count = 1;
    let firstI = i;
    while(i+1<arr.length && arr[i] == arr[i+1]) {
      count++;
      i++
    }
    if(i < arr.length) {
    let subStr = arr[i].repeat(count)
    if(count > 1) {
        str =str.replace(subStr, count+arr[firstI])
    }
    }

  }
  return str
}

module.exports = {
  encodeLine
};
