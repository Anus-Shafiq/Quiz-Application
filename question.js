// var htmlQuiz = [
//   {
//     question: "HTML stands for?",
//     option1: "Hypertext Markup Language",
//     option2: "Hyper Tool Language",
//     option3: "Hypertext Machine Language",
//     option4: "Hyperlink Text Language",
//     answer: "Hypertext Markup Language",
//   },
//   {
//     question: "Which HTML tag is used to define an unordered list?",
//     option1: "ul",
//     option2: "ol",
//     option3: "li",
//     option4: "list",
//     answer: "ul",
//   },
//   {
//     question: "Which tag is used to create a line break in HTML?",
//     option1: "break",
//     option2: "br",
//     option3: "lb",
//     option4: "newline",
//     answer: "br",
//   },
//   {
//     question: "CSS stands for?",
//     option1: "Colorful Style Sheets",
//     option2: "Cascading Style Sheets",
//     option3: "Creative Style Sheets",
//     option4: "Computer Style Sheets",
//     answer: "Cascading Style Sheets",
//   },
//   {
//     question: "What is the correct syntax to apply a CSS style to an element?",
//     option1: "element.style",
//     option2: "element { style: value; }",
//     option3: "element = style.value;",
//     option4: "style: element { value; }",
//     answer: "element { style: value; }",
//   },
//   {
//     question: "Which property is used to change the background color in CSS?",
//     option1: "color",
//     option2: "bgcolor",
//     option3: "background-color",
//     option4: "background",
//     answer: "background-color",
//   },
//   {
//     question: "Which HTML tag is used to create a table?",
//     option1: "tr",
//     option2: "td",
//     option3: "table",
//     option4: "th",
//     answer: "table",
//   },
//   {
//     question: "How do you link an external CSS file in HTML?",
//     option1: "stylesheet",
//     option2: "css",
//     option3: "link",
//     option4: "style",
//     answer: "link",
//   },
//   {
//     question: "Which tag is used to define a footer in HTML5?",
//     option1: "bottom",
//     option2: "footer",
//     option3: "end",
//     option4: "section",
//     answer: "footer",
//   },
//   {
//     question: "What is the default position value in CSS?",
//     option1: "relative",
//     option2: "absolute",
//     option3: "static",
//     option4: "fixed",
//     answer: "static",
//   },
//   {
//     question: "Which CSS property controls the text size?",
//     option1: "font-style",
//     option2: "text-size",
//     option3: "font-size",
//     option4: "text-style",
//     answer: "font-size",
//   },
//   {
//     question: "What is the correct way to comment in CSS?",
//     option1: "// comment",
//     option2: "<!-- comment -->",
//     option3: "/* comment */",
//     option4: "' comment",
//     answer: "/* comment */",
//   },
//   {
//     question: "Which attribute is used in HTML to define inline styles?",
//     option1: "style",
//     option2: "class",
//     option3: "id",
//     option4: "inline",
//     answer: "style",
//   },
//   {
//     question: "Which property is used to align text in CSS?",
//     option1: "text-indent",
//     option2: "text-align",
//     option3: "alignment",
//     option4: "font-align",
//     answer: "text-align",
//   },
//   {
//     question: "Which tag is used to define an image map in HTML?",
//     option1: "map",
//     option2: "img",
//     option3: "area",
//     option4: "coords",
//     answer: "map",
//   },
// ];

var quizzes = {
  python1: [
    {
      question:
        "Which of the following is the correct way to print 'Hello World' in Python?",
      option1: "print('Hello World')",
      option2: "echo('Hello World')",
      option3: "console.log('Hello World')",
      option4: "printf('Hello World')",
      answer: "print('Hello World')",
    },
    {
      question: "What is the output of `print(3 * 'abc')` in Python?",
      option1: "abcabcabc",
      option2: "3abc",
      option3: "Error",
      option4: "abc3",
      answer: "abcabcabc",
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      option1: "^",
      option2: "**",
      option3: "*",
      option4: "^^",
      answer: "**",
    },
    {
      question: "What is the correct file extension for Python files?",
      option1: ".pyt",
      option2: ".py",
      option3: ".pt",
      option4: ".python",
      answer: ".py",
    },
    {
      question: "Which of these collections defines a list in Python?",
      option1: "[1, 2, 3]",
      option2: "{1, 2, 3}",
      option3: "(1, 2, 3)",
      option4: '{"1", "2", "3"}',
      answer: "[1, 2, 3]",
    },
    {
      question: "What is the output of `print(type(5.0))` in Python?",
      option1: "<class 'int'>",
      option2: "<class 'float'>",
      option3: "<class 'double'>",
      option4: "<class 'number'>",
      answer: "<class 'float'>",
    },
    {
      question: "Which function is used to get user input in Python?",
      option1: "input()",
      option2: "get()",
      option3: "read()",
      option4: "scan()",
      answer: "input()",
    },
    {
      question: "What does the `len()` function do in Python?",
      option1: "Converts to lowercase",
      option2: "Returns length of an object",
      option3: "Calculates logarithm",
      option4: "Rounds a number",
      answer: "Returns length of an object",
    },
    {
      question: "Which keyword is used to define a function in Python?",
      option1: "def",
      option2: "function",
      option3: "func",
      option4: "define",
      answer: "def",
    },
    {
      question: "What is the output of `print(10 // 3)` in Python?",
      option1: "3.333",
      option2: "3",
      option3: "4",
      option4: "3.0",
      answer: "3",
    },
    {
      question: "Which of these is NOT a valid variable name in Python?",
      option1: "my_var",
      option2: "_var",
      option3: "2var",
      option4: "var2",
      answer: "2var",
    },
    {
      question:
        "What is the correct way to create a tuple with one item in Python?",
      option1: "(1)",
      option2: "1,",
      option3: "(1,)",
      option4: "[1]",
      answer: "(1,)",
    },
    {
      question:
        "Which method is used to remove the last item from a list in Python?",
      option1: "remove()",
      option2: "pop()",
      option3: "delete()",
      option4: "clear()",
      answer: "pop()",
    },
    {
      question: "What does the `range(3)` function return in Python?",
      option1: "[0, 1, 2]",
      option2: "[1, 2, 3]",
      option3: "[0, 1, 2, 3]",
      option4: "A sequence of numbers from 0 to 2",
      answer: "A sequence of numbers from 0 to 2",
    },
    {
      question: "Which operator is used for string concatenation in Python?",
      option1: "+",
      option2: "&",
      option3: "|",
      option4: ":",
      answer: "+",
    },
  ],

  python2: [
    {
      question: "Which of these is used to create a dictionary in Python?",
      option1: "[]",
      option2: "{}",
      option3: "()",
      option4: "<>",
      answer: "{}",
    },
    {
      question: "What is the output of `print('Python'[1])`?",
      option1: "P",
      option2: "y",
      option3: "t",
      option4: "h",
      answer: "y",
    },
    {
      question:
        "Which method would you use to convert a string to lowercase in Python?",
      option1: "lower()",
      option2: "tolower()",
      option3: "lowercase()",
      option4: "casefold()",
      answer: "lower()",
    },
    {
      question: "What does the `strip()` method do in Python?",
      option1: "Removes whitespace from both ends",
      option2: "Splits a string into a list",
      option3: "Replaces characters in a string",
      option4: "Converts string to uppercase",
      answer: "Removes whitespace from both ends",
    },
    {
      question: "Which keyword is used to handle exceptions in Python?",
      option1: "try",
      option2: "catch",
      option3: "exception",
      option4: "handle",
      answer: "try",
    },
    {
      question: "What is the output of `print(bool('False'))` in Python?",
      option1: "False",
      option2: "True",
      option3: "Error",
      option4: "None",
      answer: "True",
    },
    {
      question: "Which module is used for working with dates in Python?",
      option1: "time",
      option2: "calendar",
      option3: "datetime",
      option4: "date",
      answer: "datetime",
    },
    {
      question: "What does the `__init__` method do in Python classes?",
      option1: "Initializes the class object",
      option2: "Destroys the class object",
      option3: "Imports modules",
      option4: "Creates class documentation",
      answer: "Initializes the class object",
    },
    {
      question: "Which of these is NOT a built-in data structure in Python?",
      option1: "list",
      option2: "tuple",
      option3: "array",
      option4: "dictionary",
      answer: "array",
    },
    {
      question: "What is the output of `print(3 == '3')` in Python?",
      option1: "True",
      option2: "False",
      option3: "Error",
      option4: "None",
      answer: "False",
    },
    {
      question:
        "Which method is used to add an item to the end of a list in Python?",
      option1: "append()",
      option2: "insert()",
      option3: "add()",
      option4: "push()",
      answer: "append()",
    },
    {
      question: "What does the `pass` statement do in Python?",
      option1: "Terminates the program",
      option2: "Does nothing (placeholder)",
      option3: "Skips the current iteration",
      option4: "Passes arguments to a function",
      answer: "Does nothing (placeholder)",
    },
    {
      question: "Which operator is used for floor division in Python?",
      option1: "/",
      option2: "//",
      option3: "%",
      option4: "|",
      answer: "//",
    },
    {
      question: "What is the output of `print('Hello' + 3)` in Python?",
      option1: "Hello3",
      option2: "HelloHelloHello",
      option3: "Error",
      option4: "3Hello",
      answer: "Error",
    },
    {
      question: "Which function is used to open a file in Python?",
      option1: "open()",
      option2: "file()",
      option3: "read()",
      option4: "openfile()",
      answer: "open()",
    },
  ],

  python3: [
    {
      question: "What is the output of `print(f'{2 + 2}')` in Python 3?",
      option1: "4",
      option2: "2 + 2",
      option3: "{4}",
      option4: "Error",
      answer: "4",
    },
    {
      question:
        "Which of these is the correct way to create a virtual environment in Python 3?",
      option1: "python -m venv env",
      option2: "python create env",
      option3: "python virtual env",
      option4: "python new venv",
      answer: "python -m venv env",
    },
    {
      question: "What does the `@` operator do in Python 3?",
      option1: "Matrix multiplication",
      option2: "Decorator",
      option3: "Bitwise AND",
      option4: "Both 1 and 2",
      answer: "Both 1 and 2",
    },
    {
      question: "Which of these is a valid type hint in Python 3?",
      option1: "def func(x: int) -> str:",
      option2: "def func(x: int): str",
      option3: "def func(x int) -> str:",
      option4: "def func(x: int) str:",
      answer: "def func(x: int) -> str:",
    },
    {
      question: "What is the output of `print(b'text')` in Python 3?",
      option1: "text",
      option2: "b'text'",
      option3: "Error",
      option4: "bytearray(text)",
      answer: "b'text'",
    },
    {
      question: "Which method is used to format strings in Python 3?",
      option1: "format()",
      option2: "f-strings",
      option3: "% operator",
      option4: "All of the above",
      answer: "All of the above",
    },
    {
      question: "What is the output of `print(10 / 3)` in Python 3?",
      option1: "3",
      option2: "3.3333333333333335",
      option3: "3.0",
      option4: "3.33",
      answer: "3.3333333333333335",
    },
    {
      question: "Which of these is NOT a valid string prefix in Python 3?",
      option1: "f",
      option2: "b",
      option3: "u",
      option4: "s",
      answer: "s",
    },
    {
      question: "What does the `__future__` module do in Python 3?",
      option1: "Enables future Python features in current version",
      option2: "Predicts future Python versions",
      option3: "Is used for time travel",
      option4: "Is deprecated in Python 3",
      answer: "Enables future Python features in current version",
    },
    {
      question:
        "Which method is used to get a list of all attributes and methods of an object in Python 3?",
      option1: "dir()",
      option2: "help()",
      option3: "vars()",
      option4: "info()",
      answer: "dir()",
    },
    {
      question: "What is the output of `print(round(2.5))` in Python 3?",
      option1: "2",
      option2: "3",
      option3: "2.5",
      option4: "2.0",
      answer: "2",
    },
    {
      question:
        "Which of these is the correct way to create a set in Python 3?",
      option1: "{1, 2, 3}",
      option2: "[1, 2, 3]",
      option3: "(1, 2, 3)",
      option4: '{"1": 1, "2": 2}',
      answer: "{1, 2, 3}",
    },
    {
      question: "What does the `nonlocal` keyword do in Python 3?",
      option1: "Declares a global variable",
      option2: "Declares a variable in an enclosing scope",
      option3: "Prevents variable modification",
      option4: "Imports a module",
      answer: "Declares a variable in an enclosing scope",
    },
    {
      question:
        "Which of these is the correct way to create a generator in Python 3?",
      option1: "(x for x in range(10))",
      option2: "[x for x in range(10)]",
      option3: "{x for x in range(10)}",
      option4: "x for x in range(10)",
      answer: "(x for x in range(10))",
    },
    {
      question: "What is the output of `print(ascii('ö'))` in Python 3?",
      option1: "ö",
      option2: "'ö'",
      option3: "'\\xf6'",
      option4: "Error",
      answer: "'\\xf6'",
    },
  ],

  html: [
    {
      question: "What does HTML stand for?",
      option1: "Hypertext Markup Language",
      option2: "Hyper Tool Markup Language",
      option3: "Hyperlinks and Text Markup Language",
      option4: "Home Tool Markup Language",
      answer: "Hypertext Markup Language",
    },
    {
      question: "Which HTML element is used to define the title of a document?",
      option1: "<head>",
      option2: "<meta>",
      option3: "<title>",
      option4: "<header>",
      answer: "<title>",
    },
    {
      question:
        "Which attribute is used to specify an alternate text for an image?",
      option1: "src",
      option2: "alt",
      option3: "title",
      option4: "href",
      answer: "alt",
    },
    {
      question:
        "Which HTML element is used to define the main content of a document?",
      option1: "<content>",
      option2: "<main>",
      option3: "<section>",
      option4: "<body>",
      answer: "<main>",
    },
    {
      question: "Which HTML element is used to create a hyperlink?",
      option1: "<link>",
      option2: "<a>",
      option3: "<href>",
      option4: "<hyperlink>",
      answer: "<a>",
    },
    {
      question: "Which HTML element is used to define a table row?",
      option1: "<tr>",
      option2: "<td>",
      option3: "<th>",
      option4: "<table>",
      answer: "<tr>",
    },
    {
      question: "Which HTML5 element is used for playing video files?",
      option1: "<media>",
      option2: "<video>",
      option3: "<movie>",
      option4: "<play>",
      answer: "<video>",
    },
    {
      question: "Which HTML element is used to define a list item?",
      option1: "<ul>",
      option2: "<ol>",
      option3: "<li>",
      option4: "<dl>",
      answer: "<li>",
    },
    {
      question: "What does CSS stand for?",
      option1: "Colorful Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Computer Style Sheets",
      option4: "Creative Style Sheets",
      answer: "Cascading Style Sheets",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      option1: "text-color",
      option2: "font-color",
      option3: "color",
      option4: "text-style",
      answer: "color",
    },
    {
      question: "Which CSS property is used to change the font of an element?",
      option1: "font-family",
      option2: "font-style",
      option3: "text-font",
      option4: "font-type",
      answer: "font-family",
    },
    {
      question: "How do you add a background color for all <h1> elements?",
      option1: "h1 {background-color:#FFFFFF;}",
      option2: "all.h1 {background-color:#FFFFFF;}",
      option3: "h1.all {background-color:#FFFFFF;}",
      option4: "h1 {bgcolor:#FFFFFF;}",
      answer: "h1 {background-color:#FFFFFF;}",
    },
    {
      question:
        "Which CSS property is used to change the left margin of an element?",
      option1: "margin-left",
      option2: "padding-left",
      option3: "indent",
      option4: "left-margin",
      answer: "margin-left",
    },
    {
      question:
        "How do you make each word in a text start with a capital letter?",
      option1: "text-transform:capitalize",
      option2: "text-transform:uppercase",
      option3: "text-style:capitalize",
      option4: "font-variant:small-caps",
      answer: "text-transform:capitalize",
    },
    {
      question: "Which property is used to change the background image?",
      option1: "background-image",
      option2: "bgimage",
      option3: "image-background",
      option4: "background",
      answer: "background-image",
    },
  ],

  js: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      option1: "var",
      option2: "let",
      option3: "const",
      option4: "All of the above",
      answer: "All of the above",
    },
    {
      question: "What does `typeof null` return in JavaScript?",
      option1: "null",
      option2: "undefined",
      option3: "object",
      option4: "number",
      answer: "object",
    },
    {
      question: "Which method is used to add an item to the end of an array?",
      option1: "push()",
      option2: "pop()",
      option3: "shift()",
      option4: "unshift()",
      answer: "push()",
    },
    {
      question: "What is the output of `console.log(1 + '1')` in JavaScript?",
      option1: "2",
      option2: "11",
      option3: "NaN",
      option4: "Error",
      answer: "11",
    },
    {
      question: "Which operator is used for strict equality comparison?",
      option1: "==",
      option2: "===",
      option3: "=",
      option4: "!==",
      answer: "===",
    },
    {
      question: "What does the `this` keyword refer to in a global context?",
      option1: "The current function",
      option2: "The window object",
      option3: "undefined",
      option4: "null",
      answer: "The window object",
    },
    {
      question: "Which method converts a string to lowercase?",
      option1: "toLower()",
      option2: "lowerCase()",
      option3: "toLowerCase()",
      option4: "convertLower()",
      answer: "toLowerCase()",
    },
    {
      question: "What is the output of `console.log([] == ![])`?",
      option1: "true",
      option2: "false",
      option3: "Error",
      option4: "undefined",
      answer: "true",
    },
    {
      question: "Which function is used to parse a string to an integer?",
      option1: "parseInt()",
      option2: "parseInteger()",
      option3: "stringToInt()",
      option4: "int()",
      answer: "parseInt()",
    },
    {
      question: "What is the purpose of the `setTimeout()` function?",
      option1: "To delay execution of code",
      option2: "To measure time",
      option3: "To set a timer",
      option4: "To pause execution",
      answer: "To delay execution of code",
    },
    {
      question: "Which method removes the last element from an array?",
      option1: "shift()",
      option2: "pop()",
      option3: "remove()",
      option4: "delete()",
      answer: "pop()",
    },
    {
      question: "What does `NaN` stand for?",
      option1: "Not a Number",
      option2: "Null and None",
      option3: "No Available Number",
      option4: "Number is Not",
      answer: "Not a Number",
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      option1: "//",
      option2: "/* */",
      option3: "#",
      option4: "Both 1 and 2",
      answer: "Both 1 and 2",
    },
    {
      question: "What is the output of `console.log(0.1 + 0.2 === 0.3)`?",
      option1: "true",
      option2: "false",
      option3: "Error",
      option4: "undefined",
      answer: "false",
    },
    {
      question: "Which method joins all elements of an array into a string?",
      option1: "concat()",
      option2: "join()",
      option3: "merge()",
      option4: "combine()",
      answer: "join()",
    },
  ],

  advancedJs: [
    {
      question: "What is a closure in JavaScript?",
      option1:
        "A function with access to its own scope, outer function's variables, and global variables",
      option2: "A way to close a program",
      option3: "A method to hide variables",
      option4: "A type of loop",
      answer:
        "A function with access to its own scope, outer function's variables, and global variables",
    },
    {
      question: "What is the purpose of the `bind()` method?",
      option1: "To create a new function with a specific `this` value",
      option2: "To bind two objects together",
      option3: "To prevent modification of an object",
      option4: "To bind event listeners",
      answer: "To create a new function with a specific `this` value",
    },
    {
      question: "What does the `new` keyword do in JavaScript?",
      option1: "Creates a new variable",
      option2: "Creates a new instance of an object",
      option3: "Declares a new function",
      option4: "Imports a new module",
      answer: "Creates a new instance of an object",
    },
    {
      question: "What is prototypal inheritance?",
      option1: "Objects inherit directly from other objects",
      option2: "A way to copy properties between objects",
      option3: "A type of class inheritance",
      option4: "A method to create prototypes",
      answer: "Objects inherit directly from other objects",
    },
    {
      question: "What is a Promise in JavaScript?",
      option1:
        "An object representing the eventual completion of an asynchronous operation",
      option2: "A guarantee that code will execute",
      option3: "A type of function",
      option4: "A way to declare variables",
      answer:
        "An object representing the eventual completion of an asynchronous operation",
    },
    {
      question: "What is the event loop in JavaScript?",
      option1: "A loop that handles events",
      option2: "The mechanism that handles asynchronous callbacks",
      option3: "A type of for loop",
      option4: "A way to loop through events",
      answer: "The mechanism that handles asynchronous callbacks",
    },
    {
      question: "What is hoisting in JavaScript?",
      option1: "Moving declarations to the top of their scope",
      option2: "A type of function",
      option3: "A way to lift variables",
      option4: "A method to raise errors",
      answer: "Moving declarations to the top of their scope",
    },
    {
      question: "What is the difference between `let` and `const`?",
      option1: "`let` can be reassigned, `const` cannot",
      option2: "`const` can be reassigned, `let` cannot",
      option3: "No difference",
      option4: "`let` is block-scoped, `const` is function-scoped",
      answer: "`let` can be reassigned, `const` cannot",
    },
    {
      question: "What is the purpose of the `async/await` syntax?",
      option1: "To write asynchronous code that looks synchronous",
      option2: "To declare asynchronous functions",
      option3: "To wait for promises",
      option4: "All of the above",
      answer: "All of the above",
    },
    {
      question: "What is a generator function in JavaScript?",
      option1: "A function that can be exited and later re-entered",
      option2: "A function that generates numbers",
      option3: "A function that creates other functions",
      option4: "A function that runs continuously",
      answer: "A function that can be exited and later re-entered",
    },
    {
      question: "What is the purpose of the `Symbol` data type?",
      option1: "To create unique identifiers",
      option2: "To represent currency",
      option3: "To create special characters",
      option4: "To represent mathematical symbols",
      answer: "To create unique identifiers",
    },
    {
      question: "What is memoization?",
      option1:
        "An optimization technique that stores results of expensive function calls",
      option2: "A way to remember variables",
      option3: "A type of memory allocation",
      option4: "A method to memorize code",
      answer:
        "An optimization technique that stores results of expensive function calls",
    },
    {
      question: "What is the Temporal Dead Zone in JavaScript?",
      option1: "A period where variables are inaccessible",
      option2: "A time when the browser is unresponsive",
      option3: "A zone where code execution stops",
      option4: "A period before variables are hoisted",
      answer: "A period where variables are inaccessible",
    },
    {
      question: "What is currying in JavaScript?",
      option1: "Transforming a function to take arguments one at a time",
      option2: "A way to cook functions",
      option3: "A method to curry objects",
      option4: "A type of loop",
      answer: "Transforming a function to take arguments one at a time",
    },
    {
      question: "What is the purpose of the `Proxy` object?",
      option1: "To create a proxy for another object",
      option2: "To handle network requests",
      option3: "To represent a placeholder",
      option4: "To create virtual objects",
      answer: "To create a proxy for another object",
    },
  ],

  git: [
    {
      question: "What command initializes a new Git repository?",
      option1: "git init",
      option2: "git start",
      option3: "git new",
      option4: "git create",
      answer: "git init",
    },
    {
      question: "What command shows the status of your working directory?",
      option1: "git status",
      option2: "git show",
      option3: "git log",
      option4: "git diff",
      answer: "git status",
    },
    {
      question: "What command stages all changes for commit?",
      option1: "git stage .",
      option2: "git add .",
      option3: "git commit -a",
      option4: "git update",
      answer: "git add .",
    },
    {
      question: "What command commits staged changes with a message?",
      option1: "git save -m 'message'",
      option2: "git commit -m 'message'",
      option3: "git update -m 'message'",
      option4: "git snapshot -m 'message'",
      answer: "git commit -m 'message'",
    },
    {
      question: "What command shows the commit history?",
      option1: "git history",
      option2: "git log",
      option3: "git commits",
      option4: "git show",
      answer: "git log",
    },
    {
      question: "What command creates a new branch?",
      option1: "git branch new-branch",
      option2: "git create branch new-branch",
      option3: "git new branch new-branch",
      option4: "git checkout -b new-branch",
      answer: "git branch new-branch",
    },
    {
      question: "What command switches to another branch?",
      option1: "git switch branch-name",
      option2: "git checkout branch-name",
      option3: "git change branch-name",
      option4: "git move branch-name",
      answer: "git checkout branch-name",
    },
    {
      question: "What command merges another branch into the current branch?",
      option1: "git merge branch-name",
      option2: "git combine branch-name",
      option3: "git join branch-name",
      option4: "git integrate branch-name",
      answer: "git merge branch-name",
    },
    {
      question: "What command downloads changes from a remote repository?",
      option1: "git pull",
      option2: "git fetch",
      option3: "git download",
      option4: "git sync",
      answer: "git pull",
    },
    {
      question: "What command uploads changes to a remote repository?",
      option1: "git upload",
      option2: "git push",
      option3: "git send",
      option4: "git post",
      answer: "git push",
    },
    {
      question:
        "What command shows differences between working directory and staging area?",
      option1: "git diff",
      option2: "git changes",
      option3: "git compare",
      option4: "git status -d",
      answer: "git diff",
    },
    {
      question: "What command discards changes in the working directory?",
      option1: "git undo",
      option2: "git reset",
      option3: "git checkout -- file",
      option4: "git clean",
      answer: "git checkout -- file",
    },
    {
      question: "What is a .gitignore file used for?",
      option1: "To specify files Git should ignore",
      option2: "To ignore Git commands",
      option3: "To store Git configuration",
      option4: "To ignore remote repositories",
      answer: "To specify files Git should ignore",
    },
    {
      question: "What command creates a tag for the current commit?",
      option1: "git tag tag-name",
      option2: "git create tag tag-name",
      option3: "git label tag-name",
      option4: "git mark tag-name",
      answer: "git tag tag-name",
    },
    {
      question: "What command shows remote repositories?",
      option1: "git remotes",
      option2: "git remote -v",
      option3: "git show remotes",
      option4: "git list remotes",
      answer: "git remote -v",
    },
  ],

  typescript: [
    {
      question: "What is TypeScript?",
      option1: "A superset of JavaScript",
      option2: "A completely different language",
      option3: "A framework for JavaScript",
      option4: "A database language",
      answer: "A superset of JavaScript",
    },
    {
      question: "Which command compiles TypeScript to JavaScript?",
      option1: "ts-compile",
      option2: "tsc",
      option3: "typescript",
      option4: "compile-ts",
      answer: "tsc",
    },
    {
      question: "What is the file extension for TypeScript files?",
      option1: ".js",
      option2: ".ts",
      option3: ".typescript",
      option4: ".tjs",
      answer: ".ts",
    },
    {
      question:
        "How do you define a variable with a specific type in TypeScript?",
      option1: "let variable: type;",
      option2: "let variable as type;",
      option3: "let variable = type;",
      option4: "let type variable;",
      answer: "let variable: type;",
    },
    {
      question: "What is an interface in TypeScript?",
      option1: "A way to define the structure of an object",
      option2: "A user interface component",
      option3: "A connection between classes",
      option4: "A type of function",
      answer: "A way to define the structure of an object",
    },
    {
      question: "How do you define an optional property in an interface?",
      option1: "property?: type;",
      option2: "optional property: type;",
      option3: "property optional: type;",
      option4: "property: type?;",
      answer: "property?: type;",
    },
    {
      question: "What is a tuple in TypeScript?",
      option1: "An array with fixed types at specific positions",
      option2: "A pair of values",
      option3: "A type of loop",
      option4: "A mathematical concept",
      answer: "An array with fixed types at specific positions",
    },
    {
      question: "How do you define a custom type in TypeScript?",
      option1: "type MyType = ...;",
      option2: "custom MyType = ...;",
      option3: "define MyType = ...;",
      option4: "new type MyType = ...;",
      answer: "type MyType = ...;",
    },
    {
      question: "What is React?",
      option1: "A JavaScript library for building user interfaces",
      option2: "A programming language",
      option3: "A database",
      option4: "A design framework",
      answer: "A JavaScript library for building user interfaces",
    },
    {
      question: "What is JSX?",
      option1: "JavaScript XML",
      option2: "A templating language",
      option3: "A type of component",
      option4: "A state management tool",
      answer: "JavaScript XML",
    },
    {
      question: "How do you create a component in React?",
      option1: "function MyComponent() { return ... }",
      option2: "class MyComponent extends React.Component",
      option3: "const MyComponent = () => { return ... }",
      option4: "All of the above",
      answer: "All of the above",
    },
    {
      question: "What is the purpose of state in React?",
      option1: "To store component data that may change",
      option2: "To define static properties",
      option3: "To manage routing",
      option4: "To handle API calls",
      answer: "To store component data that may change",
    },
    {
      question: "How do you update state in a class component?",
      option1: "this.setState()",
      option2: "this.state =",
      option3: "setState()",
      option4: "updateState()",
      answer: "this.setState()",
    },
    {
      question: "What are hooks in React?",
      option1:
        "Functions that let you use state and other features without classes",
      option2: "A way to connect components",
      option3: "A type of event listener",
      option4: "A routing mechanism",
      answer:
        "Functions that let you use state and other features without classes",
    },
    {
      question: "Which hook is used for side effects in functional components?",
      option1: "useEffect",
      option2: "useState",
      option3: "useContext",
      option4: "useReducer",
      answer: "useEffect",
    },
  ],

  nextjs: [
    {
      question: "What is Next.js?",
      option1: "A React framework for production",
      option2: "A state management library",
      option3: "A testing framework",
      option4: "A design system",
      answer: "A React framework for production",
    },
    {
      question: "What are the main benefits of Next.js?",
      option1: "Server-side rendering and static site generation",
      option2: "Better state management",
      option3: "Built-in testing tools",
      option4: "Automatic database integration",
      answer: "Server-side rendering and static site generation",
    },
    {
      question: "How do you create a new page in Next.js?",
      option1: "Add a file to the pages directory",
      option2: "Use the createPage API",
      option3: "Define routes in next.config.js",
      option4: "Register components as pages",
      answer: "Add a file to the pages directory",
    },
    {
      question: "What is getStaticProps used for?",
      option1: "Fetching data at build time",
      option2: "Fetching data on the client",
      option3: "Managing component state",
      option4: "Creating static variables",
      answer: "Fetching data at build time",
    },
    {
      question: "What is getServerSideProps used for?",
      option1: "Fetching data on each request",
      option2: "Fetching data at build time",
      option3: "Managing server state",
      option4: "Handling API routes",
      answer: "Fetching data on each request",
    },
    {
      question: "How do you create API routes in Next.js?",
      option1: "Add files to the pages/api directory",
      option2: "Use the createApiRoute function",
      option3: "Define them in next.config.js",
      option4: "Use a separate server",
      answer: "Add files to the pages/api directory",
    },
    {
      question: "What is the purpose of next/link?",
      option1: "Client-side navigation between pages",
      option2: "Linking external resources",
      option3: "Creating anchor tags",
      option4: "Managing URL parameters",
      answer: "Client-side navigation between pages",
    },
    {
      question: "How do you add global CSS in Next.js?",
      option1: "Import it in _app.js",
      option2: "Import it in _document.js",
      option3: "Add it to next.config.js",
      option4: "Use styled-jsx",
      answer: "Import it in _app.js",
    },
    {
      question: "What is MongoDB?",
      option1: "A NoSQL document database",
      option2: "A relational database",
      option3: "A graph database",
      option4: "A key-value store",
      answer: "A NoSQL document database",
    },
    {
      question: "What is a document in MongoDB?",
      option1: "A record in a collection (BSON format)",
      option2: "A text file",
      option3: "A database table",
      option4: "A schema definition",
      answer: "A record in a collection (BSON format)",
    },
    {
      question: "What is a collection in MongoDB?",
      option1: "A group of documents",
      option2: "A set of databases",
      option3: "A type of query",
      option4: "A storage engine",
      answer: "A group of documents",
    },
    {
      question: "Which command shows all databases in MongoDB?",
      option1: "show dbs",
      option2: "show databases",
      option3: "list databases",
      option4: "db.list()",
      answer: "show dbs",
    },
    {
      question: "How do you create a new collection in MongoDB?",
      option1: "db.createCollection('name')",
      option2: "db.newCollection('name')",
      option3: "db.collection.create('name')",
      option4: "db.addCollection('name')",
      answer: "db.createCollection('name')",
    },
    {
      question:
        "Which operator is used to query documents where a field equals a value?",
      option1: "$eq",
      option2: "$match",
      option3: "$equals",
      option4: "$is",
      answer: "$eq",
    },
    {
      question: "What is the purpose of the $set operator in MongoDB?",
      option1: "To update specific fields",
      option2: "To create new documents",
      option3: "To set database options",
      option4: "To define schema",
      answer: "To update specific fields",
    },
  ],
};

var selectedQuiz = localStorage.getItem("selectedQuiz");

// Quiz variables
var question = document.getElementById("question");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var label4 = document.getElementById("label4");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var quizOptions = document.getElementsByName("quizOption");

// increament variables
var questionNo = 0;
var score = 0;

function renderQuestion() {
  question.innerHTML = quizzes[selectedQuiz][questionNo].question;

  label1.innerHTML = quizzes[selectedQuiz][questionNo].option1;
  label2.innerHTML = quizzes[selectedQuiz][questionNo].option2;
  label3.innerHTML = quizzes[selectedQuiz][questionNo].option3;
  label4.innerHTML = quizzes[selectedQuiz][questionNo].option4;

  option1.value = quizzes[selectedQuiz][questionNo].option1;
  option2.value = quizzes[selectedQuiz][questionNo].option2;
  option3.value = quizzes[selectedQuiz][questionNo].option3;
  option4.value = quizzes[selectedQuiz][questionNo].option4;
}
window.onload = renderQuestion();

// Deselect function

function deselect() {
  for (var i = 0; i < quizOptions.length; i++) {
    quizOptions[i].checked = false;
  }
}

// next question
function nextQuestion() {
  var questionCheck = false;

  for (var i = 0; i < quizOptions.length; i++) {
    if (quizOptions[i].checked) {
      questionCheck = true;

      if (quizOptions[i].value === quizzes[selectedQuiz][questionNo].answer) {
        score++;
      }
    }
  }

  if (!questionCheck) {
    Swal.fire({
      title: "No Option Selected",
      text: "Please Select Any Option",
      icon: "error",
    });
  } else {
    if (questionNo < quizzes[selectedQuiz].length - 1) {
      questionNo++;
      deselect();
      renderQuestion();
    } else {
      var result = {
        totalQuestion: quizzes[selectedQuiz].length,
        correctAnswer: score,
      };
      var resultObject = JSON.stringify(result);
      localStorage.setItem("resultInfo", resultObject);
      localStorage.setItem("resultAvailable", false);
      window.location.href = "result.html";
    }
  }
}
