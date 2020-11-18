`use strict`;
// var pii = {
//   firstName: `Name`,
//   SSN: `number`,
// };

//this is close but no cigar ... -,-

// var pii = {
//     firstName: `Name`,
//     SSN: `number`,
//   };
// var closure = function () {
// var closure = function () {
//   var firstName = function () {
//     var pii = {
//       firstName: `Name`,
//       SSN: `number`,
//     };
//     getName = function () {
//       return pii.firstName;
//     };
//     return getName(pii);
//   };
//   return firstName();
// };

// var holdClosure = closure();
// console.log(holdClosure);

//to do accept name and ssn set of variable assignment, return an object rather than the name funciton
var Security = function () {
  var pii = {
    name: `name`,
    SSN: `SSN`,
  };
  var name = function () {
    return pii.name;
  };
  // return the object rather than
  return name;
};

var returnName = Security();
console.log(returnName());

//   var pii = {
//     firstName: `Name`,
//     SSN: `number`,
//   };
//   var fName = function () {
//     return pii.firstName;
//   };

//   return {
//     getName: function () {
//       return fName;
//     },
//   };
// };

//invoke closure and try to retrieve SSN

// const r = closure();
// console.log(r.getName());
