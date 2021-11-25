// Code your solution here
// findMatching- This function takes an array of 
// drivers' names and a string as arguments, and returns the 
// matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' names and 
// a string as arguments for querying the array, and returns all 
// drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and 
// a string as arguments. Each driver object has two properties: 
// name and hometown. The function should return each element whose 
// name property matches the provided string argument.

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (driver, name) {
    return driver.filter(function(el) {
        return el.toLowerCase().indexOf(name.toLowerCase()) !== -1
    })
}
findMatching(drivers, "Bobby")
findMatching(drivers, "Sammy")

// function fuzzyMatch (driver, name) {
//     return driver.filter(function(el){
//         return el.toLowerCase().indexOf(name.toLowerCase()) !== -1
//     })
// }
//  esse acima passa o primeiro teste, mas nao os 2 ultimos.
// let firstLetters = drivers.filter(driver => driver.slice(0, name.lenght) == name)
//     return firstLetters

// esse abaixo passa os 2 ultimos testes, mas nao o primeiro.
// function fuzzyMatch(drivers, string) {
//     return drivers
//       .map((driver) => driver.split())
//       .filter((splitDriver) => splitDriver[0].indexOf(string) === string);
//   }

function fuzzyMatch (drivers, firstLetters) {
    return drivers.filter(item => item[0] === firstLetters[0])
}


function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name === name
    })
  }