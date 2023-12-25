const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let newArray = [];
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if(arr.length == 0) {
    return [];
  }
  if(arr.find((item) => item =="--discard-next") && arr.find((item) => item =="--double-prev")) {
    let indexDiscard = arr.findIndex((item) => item =="--discard-next");
    let indexDouble = arr.findIndex((item) => item =="--double-prev");
    if(indexDouble - indexDiscard == 2) {
      return [...arr.slice(0,indexDiscard),  ...arr.slice(indexDouble+1)]
    }

  }
  if(arr.find((item) => item =="--discard-next") && arr.find((item) => item =="--discard-prev")) {
    let indexNext = arr.findIndex((item) => item =="--discard-next");
    let indexPrev = arr.findIndex((item) => item =="--discard-prev");
    if(indexPrev - indexNext == 2) {
      return [...arr.slice(0,indexNext),  ...arr.slice(indexPrev+1)]
    }

  }
  if(arr.find((item) => item =="--double-next") && arr.find((item) => item =="--double-prev")) {
    let indexNext = arr.findIndex((item) => item =="--double-next");
    let indexPrev = arr.findIndex((item) => item =="--double-prev");
    if(indexPrev - indexNext == 2) {
      let item = arr[indexNext+1]
      return [...arr.slice(0,indexNext), item, item, item, ...arr.slice(indexPrev+1)]
    }

  }
  if(arr.find((item) => item =="--double-next") && arr.find((item) => item =="--discard-prev")) {
    let indexNext = arr.findIndex((item) => item =="--double-next");
    let indexPrev = arr.findIndex((item) => item =="--discard-prev");
    if(indexPrev - indexNext == 2) {
      let item = arr[indexNext+1]
      return [...arr.slice(0,indexNext), item, ...arr.slice(indexPrev+1)]
    }

  }
  if(arr.find((item) => item =="--discard-next")) {
    let index = arr.findIndex((item) => item =="--discard-next");
    if(index == arr.length -1) {
      return [...arr.slice(0,index)]
    }
    arr = [...arr.slice(0,index),  ...arr.slice(index+2)]
  }

  if(arr.find((item) => item =="--double-next")) {
    let index = arr.findIndex((item) => item =="--double-next");
    if(index == arr.length -1) {
      return [...arr.slice(0,index)]
    }
    let item = arr[index+1]
    arr =  [...arr.slice(0,index), item, ...arr.slice(index+1)]
  }
  if(arr.find((item) => item =="--discard-prev")) {
    let index = arr.findIndex((item) => item =="--discard-prev");
    if(index == 0) {
      return [...arr.slice(1,arr.length)]
    }
    arr = [...arr.slice(0,index-1),  ...arr.slice(index+2)]
  }



  if(arr.find((item) => item =="--double-prev")) {
    let index = arr.findIndex((item) => item =="--double-prev");
    let item = arr[index-1]
    if(index == 0) {
      return [...arr.slice(1,arr.length)]
    }
    arr = [...arr.slice(0,index),item,  ...arr.slice(index+1)]
  }

  return arr;
}

module.exports = {
  transform
};
