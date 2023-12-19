const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if(date == null) {
    return 'Unable to determine the time of year!'
  }
  try {
    date.getMonth()
  } catch (e) {
    throw new NotImplementedError("Invalid date!");
  }
  if(date.toString().split(' ')[3] !== date.getFullYear() ) {
    throw new NotImplementedError("Invalid date!");
  }
  if(!(date instanceof Date)) {
    throw new NotImplementedError("Invalid date!");
  }
  if(isNaN(Date.parse(date))) {
    throw new Error("Invalid date!");
  }

  let month = date.toString().split(' ')[1]
  if(month == "Dec" || month =="Jan" || month == "Feb" ){
    return 'winter';
  }
  else if(month == "Mar" || month =="Apr" || month == "May") {
    return 'spring'
  }
  else if(month == "Jun" || month == "Jul" || month == "Aug") {
    return 'summer'
  }
  else if(month == "Sep" || month == "Oct" || month == "Nov") {
    return "autumn"
  } else {
    return "winter"
  }
}

module.exports = {
  getSeason
};
