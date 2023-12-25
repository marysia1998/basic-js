const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const alfb = ['A','B','C','D','E','F','G', 'H', 'I','J', 'K', 'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
class VigenereCipheringMachine {
  type = true;
  constructor(type = true) {
    this.type = type;
  }
  encrypt(str, key) {
    if(!str || !key) {
      throw new Error("Incorrect arguments!")
    }
    let words = str.toUpperCase().split(' ');
    key = key.toUpperCase();
    let j = 0;
    let newWords = [];
    words.forEach((word) => {
        let arrStr = word.split('');
        let newStr = "";
        arrStr.forEach((sym)=> {
            let index = alfb.indexOf(sym);
            let indexKey = alfb.indexOf(key[j]);
            let indexItem = index + indexKey;

            if(indexItem >= 26) {
                indexItem -=26;
            }

            if(index == -1 || indexKey == -1) {
              if(this.type) {
                newStr +=  sym;
              } else {
                newStr =  sym + newStr;
              }

            } else {
              if(this.type) {
                newStr +=  alfb[indexItem];
              } else {
                newStr =  alfb[indexItem] + newStr;
              }
            }
            j++;
            if(j >= key.length) {
                j = 0;
            }
        })
        if(this.type) {
          newWords = [...newWords.slice(0), newStr];
        } else {
          newWords = [newStr, ...newWords.slice(0)];
        }
    })
    return newWords.join(" ")
}
decrypt(str, key) {
  if(!str || !key) {
    throw new Error("Incorrect arguments!")
  }
  let words = str.toUpperCase().split(' ');
  key = key.toUpperCase();
  let j = 0;
  let newWords = [];
  words.forEach((word) => {
      let arrStr = word.split('');
      let newStr = "";
      arrStr.forEach((sym)=> {
          let index = alfb.indexOf(sym);
          let indexKey = alfb.indexOf(key[j]);
          let indexItem = index - indexKey;

          if(indexItem < 0) {
              indexItem +=26;
          }
          if(index == -1 || indexKey == -1) {
            if(this.type) {
              newStr +=  sym;
            } else {
              newStr =  sym + newStr;
            }

          } else {
            if(this.type) {
              newStr +=  alfb[indexItem];
            } else {
              newStr =  alfb[indexItem] + newStr;
            }}
          j++;
          if(j >= key.length) {
              j = 0;
          }
      })
      if(this.type) {
        newWords = [...newWords.slice(0), newStr];
      } else {
        newWords = [newStr, ...newWords.slice(0)];
      }
  })
  return newWords.join(" ")
}
}

module.exports = {
  VigenereCipheringMachine
};
