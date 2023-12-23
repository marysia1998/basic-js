const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let arr = n.toString().split('')
  for(let i = 0; i<arr.length; i++) {
      let newArr = [...arr.slice(0, i), ...arr.slice(i+1)]
      if(newArr.join('')*1 > max) {
          max = newArr.join('')*1
      }
  }
  return max
}

module.exports = {
  deleteDigit
};
