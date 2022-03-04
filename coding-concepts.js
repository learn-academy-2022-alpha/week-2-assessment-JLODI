// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
 console.log(cohort.split(""))

// a) Your answer: ["A", "l", "p", "h", "a", " ", "2", "0", "2", "2"]
// b) Verify and explain:
// The console log returned an array with all the letters including the space split into an array
// [
//   'A', 'l', 'p', 'h',
//   'a', ' ', '2', '0',
//   '2', '2'
//]
//the .split build in method takes a string an splits it into an array. The optional argument has a "", meaning that it will split in between each character. If you were to put " " in the argument, it would split at every space, omitting the spaces. Since there are double quotations in my answer in the but in this case with terminal it uses a single ''

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain:
//Console log returned "undefined". That's because the return statement was missing within the function. The function doesn't know what to do with the string yet so it returned undefined. Adding in return at the beginingi of line 26 allowed the console log to return the proper string


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)

console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain:
//The console log returned the same outcome as my answer [8, 10, 12, 14, 16]. The .map higher order function here took each value within the array and multiplied it by 2. .map iterates the * 2 function through each value and returns an array of the same length, except each value is now the product of * 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:
//The console log returned the same outcome as my answer [11, 13, 15].
//The .filter higher order function is similar to the .map one but this time it checks a criteria to filter out what doesnt fit it. The function value: "check if the remainder of value / 2 does not equal 0" checks if the value is odd. If it's odd, then it will be included in the new array. If it is not odd, then it will skip it and check the next value. Thus the new array returned only odd numbers.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain:
// The console log returned "Javascript" which matches my predicted answer. The code in console.log uses object destructuring which grabs the property of a specific object and returns the value, in this case the key name "languages" and value "Javascript". The index number was also specified in the brackets, and Javascript was located at index 0, the first value.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: [student: George, cohort: Alpha, year 2022]
// b) Verify and explain:
//Console log returned:
//Learn { student: 'George', cohort: 'Alpha', year: 2022 }
// the console log returns the whole class and its properties in curly brackets. I forgot the name of the class and used [] brackets, thinking it would return an array. But a class is a function that contains data and behavior (hence curly brackets to encapsulate within a code block). The "this" keyword allows a function to be called from within the object by referencing the object with "this.".
// The constructor within the class code block is a method to create and initialize objects. while "new" within the learnStudent variable means it is making a new instance of a class, Learn. The whole code takes the class of Learn (like an object template) and the argument learnStudent (the variable with the new class invoked) and returns an object with George plugged into the name value.
