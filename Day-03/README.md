# Variables and Primitive Data types

## Variables

**Why we need to use Variables:**

- For reusability purpose. When ever we want the data, we call it by variable.

```javascript
a=10
b=5
name='marvel'

console.log(name)
console.log(a, b)
console.log(a + b)
```

**Naming conventions for variables:**

- Only alphabets, digits, underscore, dollar signs are allowed.
- Casing matters
  - pascal casing (Each word starts with an uppercase letter.)  
  - camel casing (apart from the first letter in first word, Each word starts with an uppercase letter.)
- Can not be started with numbers, or any other symbols (apart from dollar, underscore, alphabets).
- Spaces are not allowed in b/w the variable name.
- reserved keywords should not be usd.

### Variable Declaration

- When we specify a keyword with identifier but without assigning any value, is known as Variable declaration.
- *Syntax is*: ```keyword identifier```

### Variable Assignment

- Storing data into a variable is called Assignment.
- If we want to assign a value to a variable, we'll use the assignment operator, the equals sign.
- The assignment operator's purpose is to take the value that is on its right and put it into what it's on its left.
- *Syntax is*: ```identifier = literal```

### Variable Initialization

- When declaration & assignment are done at a time in a single line, it is called **variable definition or Initialization**.
- *Syntax is*: ```keyword identifier = literal```
  
## Variable creation using var keyword

- By using the var keyword, we can do:
  - Declaration & Re-Declaration
  - Assignment & Re-Assignment
  - Initialization & Re-Initialization
  
```javascript
var mobile; // declaration
console.log(mobile); // undefined

var mobile; // Re declaration
console.log(mobile); // undefined

mobile = 10000; // Assignment
console.log(mobile); // 10000

mobile = "000"; // Re - Assignment
console.log(mobile); // '000'

var mobile = "IPhone";  // Initialization
console.log(mobile); // IPhone

var board = "black board";  // Initialization
var board = "digital board";    // Re-Initialization
console.log(board);
```

## Variable creation using let keyword

- By using the let keyword, we can do:
  - Declaration
  - Assignment & Re-Assignment
  - Initialization

```javascript
let mobile; // declaration
console.log(mobile); // undefined

/*
let mobile; // Re declaration
console.log(mobile); // Syntax errror
*/

mobile = 10000; // Assignment
console.log(mobile); // 10000

mobile = "000"; // Re - Assignment
console.log(mobile); // '000'

/*
let mobile = "IPhone";  // Initialization
console.log(mobile); // Syntax error
*/

let board = "black board";  // Initialization
console.log(board); // black board

```

## Variable creation using const keyword

- By using the const keyword, we can do:  
  - Initialization

```javascript
/*
const mobile; // declaration
console.log(mobile); // Syntax error

let mobile; // Re declaration
console.log(mobile); // Syntax errror
*/ 

/*
const mobile;   // declaration
mobile = 10000; // Assignment
console.log(mobile); // syntax error

mobile = "000"; // Re - Assignment
console.log(mobile); // syntax error
*/ 

let mobile = "IPhone";  // Initialization
console.log(mobile); // IPhone

let mobile = "Samsung";  // Re-Initialization
console.log(mobile); // SyntaxError
```

## Data types

Each & every language works with data. In JavaScript, The data is classified into two types:

- Primitive Data types
- Reference Data types

### Primitive Data types

- A Primitive data type is a fundamental data type, built-in data types that represents a single, simple value and is not an object.
- Primitive values are immutable, meaning their value cannot be changed after creation. When you assign a primitive value to a variable, a copy of that value is made.
- Each & every primitive datatype has some limited storage inside memory.

**The Primitive Data types are as follows:**

- number
- string
- boolean
- undefined
- null
- Symbol
- bigint
  