// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// describe("multThree", () => {
//   it("take in an array of numbers and returns an array with all the numbers multipled by 3", () => {
// expect(multThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//   })
// })
//
// // // pass the variable name into the "function invocation"
// ex.
// expect(multThree(numbersArray1)).toEqual("18, 21, 24, 27, 30")
// expect(multThree(numbersArray2)).toEqual("72, 81, 90, 99, 108")
//   })
// })

// b) Create the function that makes the test pass.

// pseudo code:
// create a function called multThree
// function multThree will ittrate through an array of numbers using map
// map through the array
// // set map argument to be value * 3
// // return the array of numbers multiplied by three
//
// const multThree = (array) => {
//   return array.map(value => value * 3)
// }


// // 1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
//
// // a) Create a test with expect statements for each of the variables provided.
//
// describe("divisibleByThree", () => {
//   it("returns a string saying the number is divisible by three or not", () => {
// expect(divisibleByThree()).toEqual("The number is or is not divisible by three")
//   })
// })

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

//pseudo code:
//create a function called divisibleByThree
//function will take argument and check if it's divisible by 3
//If yes, then return string "(number) is divisible by three"
//If no, then return string "(number) is not divisible by three"

// const divisibleByThree = (value) => {
//     if (value % 3 === 0){
//       return `${value} is divisible by three`
//     }
//     else {
//       return `${value} is not divisible by three`
//     }
// }

//pass the variable name into the "function invocation"

//expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
//expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
//expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
//   })
// })

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
//
// describe("capitalizeMachine", () => {
//   it("take in an array and make all words capitalized", () => {
// expect(capitalized()).toEqual(["array of all words capitalized"])
//   })
// })

// b) Create the function that makes the test pass.

//pseudo code:
//create a function called "capitalizeMachine"
//create variable that will map through the array
//set map argument to access then capitalize the first character and then join the rest of the word
//return with variable (mapped array) of same length with all words capitalized
//
// const capitalizeMachine = (array) => {
//   let capitalized = array.map(value => {
//     return value[0].toUpperCase() + value.substring(1)
//   })
//   return capitalized
// }

// // // pass the variable name into the "function invocation"
// ex.
// describe("capitalized", () => {
//   it("take in an array and make all words capitalized", () => {
// expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//   })
// })
// describe("capitalized", () => {
//   it("take in an array and make all words capitalized", () => {
// expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//   })
// })



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// describe("firstVowel", () => {
//   it("take in a string find the first vowel", () => {
// expect(firstVowel()).toEqual("returns the index number of the first vowel")
//   })
// })

// b) Create the function that makes the test pass.

//pseudo code (kinda inefficient way)
// create a function called firstVowel
// function will itterate through characters of a string
// function checks if letter is a,e,i,o,u
// if yes, return index number of that letter
// if no, move onto next character until a vowel is found

// const firstVowel = (string) => {
//   for (let i = 0; i < string.length; i++) {
//     if(string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u" ){
//     return i
//   }
//  }
// }

//pseudo code (better way?)
// create a function called firstVowel
// function will itterate through letters of a string
// function checks if letter is included in "aeiou"
// if yes, return index number of that letter
// if no, move onto next character until a letter matches any of the letters in "aeiou"


const firstVowel = (string) => {
  for (let i = 0; i < string.length; i++) {
    if("aeiou".includes(string.charAt(i)) === true ){
    return i
  }
 }
}
// more efficient since checking the character from the string against aeiou instead of the other way around.

describe("firstVowel", () => {
  it("take in a string find the first vowel", () => {
expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

// describe("firstVowel", () => {
//   it("take in a string find the first vowel", () => {
// expect(firstVowel(vowelTester2)).toEqual(0)
//   })
// })
//
// describe("firstVowel", () => {
//   it("take in a string find the first vowel", () => {
// expect(firstVowel(vowelTester3)).toEqual(2)
//   })
// })
