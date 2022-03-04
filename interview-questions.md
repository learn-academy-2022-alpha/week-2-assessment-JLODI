# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer:
  Parameters are named placeholders that are defined in the function
  Arguments are values that are passed in place of the parameter, when you're actually invoking the function. For example in a function, parameters are first defined in the first set of parentheses preceding the function arrow and the code block. Then the parameter can be referenced within the code block of the function. Then when you are invoking the function, you can write a value as an argument (in the parentheses after the method syntax) to run the function for that particular value.
  syntax example:
  function = (parameter) =>{code block}
  console.log(function(argument))

  Researched answer:
  A parameter is a variable that is defined in the parentheses of a function expression. Once it's defined, it can be referenced anywhere inside the function code block. Next the parameter can assigned a value called an argument, which is the actual content passed into the function, inside the parentheses as the function is invoked. The argument takes the place of every instance of the parameter in a function. The parameter is the defined variable, while the argument is the value of that variable.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer:
  .map() is a built in higher order function that takes in three parameters: value, index, and array. Value is the actual data in the element. Index is the location of the data in the object (number value). And array parameter references the array name that the function is called on. Value is required to be defined at the minimum, while index and array are optional.

  Researched answer:
  .map() Javascript built in method three predefined parameters are: value, index, and array. Value refers to the value of the array at the current iteration and is the only parameter required. Index is an optional iteration referring to the location of the value within a string or array (based on zero based indexing). Array refers to the array that the .map() is called on. The name of the parameters are defined to whatever name, but value, index, and array will always be in that exact order.


3. What is the difference between map and filter?

  Your answer:
Both map and filter are higher order functions, built in methods that can be run on an array. Whereas map will iterrate its a function through an array and return an array of the same length, filter will check a criteria and will return a new array based on the criteria or "filter" given, so it may not necessarily return an array of the same length. So you would use map if you are simply running a function through each item in an array, while you would use use filter for returning data that only fits the conditions.

  Researched answer:
Higher order functions map and filter are both built in methods in Javascript, but map will do something to each item in an array and return an array of the same length, while filter makes decisions about each item on the area and returns a subset of data based on the criteria.


4. What is the difference between a function and a method?

  Your answer:
A function is like a coded machine that will take something and do something with it, based on what instructions it's given. While a method is a function that belongs to an object. Thus all methods are functions, but not all functions are methods (or associated with an object). Functions are usually followed be a () (the parameters), then the {} (code block). In order to write a method that accesses a value from within the object, "this" keyword is used to make a variable. Example: this.variable

  Researched answer:
A function is a set of instructions detailing how to perform tasks. These instructions can be used to execute tasks repeatedly. A function also must stay encapsulated, meaning its logic is contained and wont conflict with the rest of the program. A method is a property of an object that contains a function. They are stored as object properties and use .notation in syntax for example when accessing it, syntax object.methodName() is used.


5. What is object destructuring?

  Your answer:
Object destructuring is taking an object and breaking down the properties within the object to be variables that can be called. For example in a console log command, you can call the property value by first assigning a variable to the key name, then typing that variable name as the argument in the log, which should return just that specific property value). It's like plucking a piece of data out of a collection of it.

  Researched answer:
Object destructuring is a special way of assigning variables to the individual elements within an array or object. It is very useful way of destructuring. Assigning the variables with destructuring includes the following: start with a variable keyword, list the variable names with curly braces (variable names must correspond to property names of the object), and use the assignment operator to assign the object unpack. The act of desctructuring is very useful for keeping code dry when interacting with objects containing many properties.


6. STRETCH: What is hoisting in JavaScript?

  Your answer:
Hoisting means to raise something, like hoisting a flag. In javascript it's a similar concept: where a developer puts all the functions and variables to the top of the code, before the code is executed. Since javascript code is read from top to bottom, this ensures that functions can be used before they are run. I remember it in class as a good practice to hoist your functions and variables first before invoking them.
^(actually this is close but not quite after doing my researched answer)

  Researched answer:
Hoisting is a default behavior where declarations of functions, variables or classes move to the top of the scope, prior to running the code. Thus even if a variable is declared after it is to be referenced, it will seem as it is already moved to the top (declared first then can be referenced), even though javascript code reads from top to bottom. If a variable is assigned with the "var" syntax, then it can be hoisted (declaration moved to the top) while const and let cannot be hoisted.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:
Class inheritance allows a class to inherit all the methods and properties from another class. This lets you "extend" or lets you add more functionality to it. It's kind of like a base template that can be altered.

2. React:
React is a free and open source javascript library used for mostly building user interfaces, maintained by Meta (Facebook company).

3. React state:
"state" in react is a javascript object that manages information that can be constantly changing. From my understanding it's a snapshot of the current state of a component (reusable code in react). If a component needs to act independently of its attribute changes for example, then the attributes should be part of its state.

4. React lifecycle methods:

Lifecycle methods are special methods built into React and are a series of events that happen through out a react components' use. Similar to a living being's lifecycle, "mounting" is birth, "update" is growth, and "unmount" is the death of the component.

5. DOM:
DOM stands for Document Object Model. It's an interface that allows developers to create, change or remove elements in the document (HTML document).
