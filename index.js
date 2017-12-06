// Code your solution in this file.
function lowerCaseDrivers (array) {
  return array.map(function (element) { return element.toLowerCase();})
};

function nameToAttributes (array){
  return array.map(function(element) {
    let name = element.split(" ")
    return firsName: name[0], LastName: name[1];)
  }
}
function attributesToPhrase (array){
  return array.map(function(element) {
    return `${element.name} is from ${element.hometown}`;)
  }
}
