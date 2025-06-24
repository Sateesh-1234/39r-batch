# Printing statements and Introduction to Variables

## Programming language Vs Scripting language

*Programming language:*

- The language which is used to provide communication b/w programmers, and machines.
- Programming languages use Compilers to run the code.
  
*Scripting language:*

- A language which is used to manipulate the browsers.
- Scripting languages use Interpreters to exeecute the code.

## Compiler Vs Interpreter

*Compiler:*

- The software which converts the source code into machine code before execution.
- ```C source code -> compilation -> Machine code -> Executable file (Platform dependent)```
- ```Java source code -> compilation -> Byte code -> Executable file (Platform in-dependent)```
  
*Interpreter:*

- An Interpreter is a software that reads high-level language instructions, and executes them directly, typically line-by-line by converting them into low-level operations that machine can understand.
- ```source code -> Interpretation -> converts & executes each instruction immediately```
- Unlike Compiler, the Interpreters will not generate the executable files.
  
## Printing statements in JavaScript

- **console.log()** for displaying general messages into browser's console.
- **console.info()** for displaying informational messages into browser's console.
- **console.warn()** for displaying warning messages into browser's console.
- **console.error()** for displaying error messages into browser's console.
- **console.table()** for displaying tables into browser's console. Applcable only for arrays, and objects.
- **Concatenation operator** for joining two or more strings, also adds up different numbers.
- **Comma operator** add a space bt default among the different strings.

## Variables in JavaScript

The Data is stored in memory. If we want to access that data, simply we go to that location and access it.
For example, If we use: **console.log("data printing")**<br/>

Most of the time, a JavaScript application needs to work with information. Whenever we have stored multiple huge data in memory and want to retrieve that data, it was a hectic process and from there, the concept of variables evolved.  

### What is Variable in JavaScript?

A Variable is a named location, or memory location which is used to store the data, or value, or literal for temporary purposes as we can re-assign the data, and reuse it in the future.

## Creating Variables

JavaScript provides different ways to represent variables based on how to store the data. There are 2 way as follows:

- Without using keywords
- Using keywords
  
### Creating Variables without using keywords

- It is the oldest way of creating variables, and used in the intial days of JS evolution.
- It leads to unwanted behaviour and bugs. So, we are not using them in today's life.
  
```javascript
num = 10; 
num = 10.25;
num = "a";
name = "sateesh";
```

### Creating Variables using keywords

- As creating variables without using keywords leads to bugs, JavaScript introduced several keywords as follows:
  - var keyword
  - let keyword
  - const keyword
  
### var keyword

Before ES6 versin, the only way to declare a variable in javaScript was to use the **var keyword**.
Syntax: **var identifier = literal**

```javascript
var batch = '39r'
console.log(batch);

var num = 10;
console.log(num);
```
  
### let keyword

The **let keyword** was introduced in ES6 version. If the values might change in the future, then use var keyword.

Syntax: **let identifier = literal**

```javascript
let cout = 0; 
let message = "Hello World!"; 
```

### const keyword

The **const** keyword was added in the ES6 version. It should be used for constant values. use const if the value will never change.

```javascript
const pi = 3.14149;
const name = "sateesh";
```
