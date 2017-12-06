// Code your solution in this file.
function lowerCaseDrivers (array) {
  return array.map(function (element) { return element.toLowerCase();})
};

function nameToAttributes (array) {
  return array.map(function(driver) {
    return {'firstName': driver.split(' ')[0], 'lastName': driver.split(' ')[1]}
  })
};


function attributesToPhrase (array) {
  return array.map(function(element) {
    return `${element.name} is from ${element.hometown}`
  })
};
