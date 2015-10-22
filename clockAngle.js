// string will be time in this kind of format 5:10
// this function will return the angle between minutes and hours hands
function angleClock(string) {
  var colonIndex = string.indexOf(':');

  if (colonIndex < 0) {
    return 'invalid time';
  }
  var hour = string.slice(0, colonIndex);
  var minute = string.slice(colonIndex+1);

  // there are 360 degree in a circle
  // each hour / 5 minutes will be 360 / 12 = 30 degree
  // each minute will be 30 / 5 = 6 degree

  //look for hour angle fro 12/24 o'clock position
  var hourAngle = hour * 30;
  var minuteAngle = 6 * minute;
  if (minute < 10) {
    // don't do anything
  } else if (minute <= 20){
  // else add degree to hour angle
    hourAngle += 6;
  } else if (minute <= 30) {
    hourAngle += 12;
  } else if (minute <= 40) {
    hourAngle += 18;
  } else if (minute <= 50) {
    hourAngle += 24;
  }

  if (hourAngle < minuteAngle) {
    return minuteAngle - hourAngle + ' degree';
  } else {
    return hourAngle - minuteAngle + ' degree';
  }
}

console.log(angleClock('test'));
console.log(angleClock('5:00'));
console.log(angleClock('10:10'));
console.log(angleClock('2:50'));
