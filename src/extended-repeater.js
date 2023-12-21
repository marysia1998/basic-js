const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arrAddition = [];
  for(let i =0; i<options.additionRepeatTimes; i++) {
    arrAddition.push(options.addition+"")
  }
  console.log(arrAddition)
  let strAddition = ""
  if(options.additionSeparator) {
    strAddition = arrAddition.join(options.additionSeparator);
  } else {
    strAddition = arrAddition.join("|");
  }

  if(!options.additionRepeatTimes && options.addition) {
    strAddition = options.addition
}
  let arrStr = [];
  for(let i =0; i<options.repeatTimes; i++) {
    arrStr.push(str + strAddition)
  }
  if(!options.repeatTimes && !options.additionRepeatTimes){
    return str + options.addition;
  }

  if(options.separator) {
    return arrStr.join(options.separator)
  } else {
    return arrStr.join("+");
  }

}

module.exports = {
  repeater
};
