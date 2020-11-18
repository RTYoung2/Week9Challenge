var exercise = function (phrase) {
  return `Today's Exercise : ${phrase}`;
};

var run = function () {
  return exercise(`Running`);
};

var swim = function () {
  return exercise(`swimming`);
};

// var bike = function (){
// return exercise(`biking`)
// }

console.log(run());
console.log(swim());
// console.log(bike())
