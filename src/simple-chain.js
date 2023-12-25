const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
let arr = [];
const chainMaker = {
  getLength() {
    return arr.length
  },
  addLink(value) {
    if (value == null) {
      value = "null";
    }
    arr.push(`( ${value.toString()} )`);
    return this;
  },
  removeLink(position) {
    if(position <= 0 || position > this.getLength() || typeof position != "number") {
      arr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    arr = [...arr.slice(0, position-1), ...arr.slice(position)];
    return this;
  },
  reverseChain() {
    arr.reverse();
    return this;
  },
  finishChain() {
    let res = arr.join("~~");
    arr = [];

    return res;
  }
};

module.exports = {
  chainMaker
};
