
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->


# **JavaScript**

**JavaScript** is a programming language used to make websites interactive.

It works together with:

* **HTML** → Structure of a webpage
* **CSS** → Style of a webpage
* **JavaScript** → Behavior & interactivity

---

## **Your First JavaScript Code**

```javascript
console.log("Hello, World!");
```

👉 This prints **Hello, World!** in the browser console.

---

## **Variables**

Variables store information.

```javascript
let name = "John";
let age = 25;

console.log(name);
console.log(age);
```

### Types of Variables

* `let` → can change value
* `const` → cannot change value
* `var` → old way (avoid as beginner)

Example:

```javascript
const country = "USA";
```

---

## **Data Types**
**Data types** tell us what kind of value a variable is storing.

There are **two categories**:

1. Primitive Data Types -> Immutable
2. Non-Primitive (Reference) Data Types -> Mutable


### 1. Primitive Data Types

These store **single simple values**.

---

### 1️⃣ String

Stores text (inside quotes).

```javascript
let text = "Hello World";
let name = 'John';
```

---

### 2️⃣ Number

Stores numbers (integer or decimal).

```javascript
let age = 25;
let price = 99.99;
```

---

### 3️⃣ Boolean

Stores only **true** or **false**.

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

---

### 4️⃣ Null

Intentional empty value.

```javascript
let empty = null;
```

Meaning: "Nothing here on purpose."

---

### 5️⃣ Undefined

Variable declared but not assigned.

```javascript
let data;
console.log(data); // undefined
```

Meaning: "Value not assigned yet."

---

### 6️⃣ BigInt

For very large numbers.

```javascript
let bigNumber = 12345678901234567890n;
```

Add **n** at the end.

---

### 7️⃣ Symbol

Creates unique values.

```javascript
let id = Symbol("id");
```

Mostly used in advanced JavaScript.



### 2. Non-Primitive (Reference) Data Types

These store collections or complex data.


### 1️⃣ Object

An **object** is a collection of **key-value pairs**.

* **Key** → Property name
* **Value** → Can be any data type (string, number, array, function, etc.)

Objects are **mutable**, meaning you can update, add, or delete properties.

### Creating an Object

```javascript
let person = {
  name: "John",
  age: 30
};

console.log(person);
```

**Output:**

```
{ name: "John", age: 30 }
```

### Accessing Object Properties

### 1️⃣ Dot Notation (Most Common)

```javascript
console.log(person.name);
console.log(person.age);
```

**Output:**

```
John
30
```

### 2️⃣ Bracket Notation (Useful for Dynamic Keys)

```javascript
console.log(person["name"]);

let key = "age";
console.log(person[key]);
```

**Output:**

```
John
30
```

---

### Updating Object Properties

You can **change an existing property**:

```javascript
person.age = 35;
person.name = "Mike";

console.log(person);
```

**Output:**

```
{ name: "Mike", age: 35 }
```

---

### Adding New Properties

You can **add new key-value pairs** anytime:

```javascript
person.city = "New York";

console.log(person);
```

**Output:**

```
{ name: "Mike", age: 35, city: "New York" }
```

---

### Deleting Properties

Use the `delete` keyword:

```javascript
delete person.age;

console.log(person);
console.log(person.age); // Accessing deleted property
```

**Output:**

```
{ name: "Mike", city: "New York" }
undefined
```

---

### Check if a Property Exists

```javascript
console.log("name" in person); // true
console.log("age" in person);  // false
```

**Output:**

```
true
false
```

---

### Objects Are Reference Types

If you assign an object to another variable, both point to the same memory:

```javascript
let obj1 = { name: "John" };
let obj2 = obj1;

obj2.name = "David";

console.log(obj1.name);
```

**Output:**

```
David
```

> Changing `obj2` also changed `obj1`.


### 2️⃣ Array
An **array** is an **ordered collection of values**.

* Values can be **any data type**: numbers, strings, objects, even other arrays.
* Arrays are **mutable**, so you can **update, add, or remove** elements.

---

### Creating an Array

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
```

**Output:**

```
["Apple", "Banana", "Mango"]
```

---

### Accessing Array Elements

Array elements are accessed using **index**.

> Index starts at `0`.

```javascript
console.log(fruits[0]); // First element
console.log(fruits[2]); // Third element
```

**Output:**

```
Apple
Mango
```

---

### Updating Array Elements

Change the value at a specific index:

```javascript
fruits[1] = "Orange"; // Replace "Banana" with "Orange"

console.log(fruits);
```

**Output:**

```
["Apple", "Orange", "Mango"]
```

---

### Adding Elements to an Array

### 1️⃣ At the End → `push()`

```javascript
fruits.push("Grapes");

console.log(fruits);
```

**Output:**

```
["Apple", "Orange", "Mango", "Grapes"]
```

### 2️⃣ At the Beginning → `unshift()`

```javascript
fruits.unshift("Strawberry");

console.log(fruits);
```

**Output:**

```
["Strawberry", "Apple", "Orange", "Mango", "Grapes"]
```

---

### Removing Elements from an Array

### 1️⃣ From the End → `pop()`

```javascript
fruits.pop(); // Removes "Grapes"

console.log(fruits);
```

**Output:**

```
["Strawberry", "Apple", "Orange", "Mango"]
```

### 2️⃣ From the Beginning → `shift()`

```javascript
fruits.shift(); // Removes "Strawberry"

console.log(fruits);
```

**Output:**

```
["Apple", "Orange", "Mango"]
```

### 3️⃣ Remove at Specific Position → `splice()`

```javascript
fruits.splice(1, 1); // Remove 1 element at index 1 ("Orange")

console.log(fruits);
```

**Output:**

```
["Apple", "Mango"]
```

---

### Check Array Length

```javascript
console.log(fruits.length);
```

**Output:**

```
2
```

---

### Arrays Are Mutable

You can change elements directly:

```javascript
let numbers = [1, 2, 3];
let numbers2 = numbers;

numbers2[0] = 100;

console.log(numbers); // [100, 2, 3]
```

> Both variables point to the same array in memory.


### 3️⃣ Function

A **function** is a **reusable block of code** that performs a task.
Functions in JavaScript are **objects**, so they are **mutable**.

---

### Types of Functions in JavaScript

There are **mainly 4 types** of functions:

1. **Function Declaration**
2. **Function Expression**
3. **Arrow Function**
4. **Anonymous Function**


### 1️⃣ Function Declaration

**Declared using the `function` keyword.**
Can be called **before or after its declaration** (hoisting works).

### Syntax

```javascript
function functionName(parameters) {
   // code to run
}
```

### Example

```javascript
function greet() {
  console.log("Hello, World!");
}

greet();
```

**Output:**

```
Hello, World!
```

---

### 2️⃣ Function with Parameters and Return Value

**Parameters** allow passing data, **return** sends a value back.

```javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);
```

**Output:**

```
8
```

---

### 3️⃣ Function Expression

A function can be **stored in a variable**.
Cannot be called before definition (no hoisting).

```javascript
let multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5));
```

**Output:**

```
20
```

---

### 4️⃣ Arrow Function (Modern JS)

Shorter syntax, often used in ES6+.

```javascript
let divide = (a, b) => a / b;

console.log(divide(10, 2));
```

**Output:**

```
5
```

Arrow functions can also be **single-line** without `{}` or `return`:

```javascript
let square = x => x * x;
console.log(square(4));
```

**Output:**

```
16
```

---

### 5️⃣ Functions Are Mutable

Functions are objects, so you can add properties:

```javascript
function greet() {
  console.log("Hello!");
}

greet.language = "English";
console.log(greet.language);
```

**Output:**

```
English
```

---

### 6️⃣ Calling a Function Multiple Times

```javascript
function sayHi(name) {
  console.log("Hi " + name + "!");
}

sayHi("Alice");
sayHi("Bob");
sayHi("Charlie");
```

**Output:**

```
Hi Alice!
Hi Bob!
Hi Charlie!
```


---

### How to Run (Call) a Function

Creating a function is called **declaring** it.
To use it, you must **call** (run) it.


```javascript
function greet() {
  console.log("Hello!");
}

greet();   // This runs the function
```


---

## **Operators**

Operators are **symbols** used to perform operations on values and variables.

Example:

```javascript
let sum = 5 + 3;  // + is an operator
```

---

### 1️⃣ Arithmetic Operators

Used for mathematical calculations.

| Operator | Meaning             | Example      |
| -------- | ------------------- | ------------ |
| `+`      | Addition            | `5 + 2` → 7  |
| `-`      | Subtraction         | `5 - 2` → 3  |
| `*`      | Multiplication      | `5 * 2` → 10 |
| `/`      | Division            | `10 / 2` → 5 |
| `%`      | Modulus (Remainder) | `5 % 2` → 1  |
| `**`     | Exponent (Power)    | `2 ** 3` → 8 |

### Example

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a % b);  // 1
```

---

### 2️⃣ Assignment Operators

Used to assign values to variables.

| Operator | Example  | Same As     |
| -------- | -------- | ----------- |
| `=`      | `x = 5`  | Assign 5    |
| `+=`     | `x += 3` | `x = x + 3` |
| `-=`     | `x -= 3` | `x = x - 3` |
| `*=`     | `x *= 2` | `x = x * 2` |
| `/=`     | `x /= 2` | `x = x / 2` |

### Example

```javascript
let x = 10;
x += 5;   // x = x + 5
console.log(x); // 15
```

---

### 3️⃣ Comparison Operators

Used to compare two values.
They return **true** or **false** (Boolean).

| Operator | Meaning                     |
| -------- | --------------------------- |
| `==`     | Equal (checks value only)   |
| `===`    | Strict equal (value + type) |
| `!=`     | Not equal                   |
| `!==`    | Strict not equal            |
| `>`      | Greater than                |
| `<`      | Less than                   |
| `>=`     | Greater or equal            |
| `<=`     | Less or equal               |

### Example

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

👉 `===` is recommended (safer).

---

### 4️⃣ Logical Operators

Used to combine conditions.

| Operator | Meaning                 |   |                       |
| -------- | ----------------------- | - | --------------------- |
| `&&`     | AND (both must be true) |   |                       |
| `        |                         | ` | OR (one must be true) |
| `!`      | NOT (reverse result)    |   |                       |

### Example

```javascript
let age = 20;
let hasID = true;

console.log(age > 18 && hasID); // true
```

---

### 5️⃣ Increment & Decrement Operators

| Operator | Meaning       |
| -------- | ------------- |
| `++`     | Increase by 1 |
| `--`     | Decrease by 1 |

```javascript
let num = 5;
num++;
console.log(num); // 6
```

---

### 6️⃣ String Operators

`+` can join (concatenate) strings.

```javascript
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe
```

---

### 7️⃣ Ternary Operator (Short If-Else)

Syntax:

```javascript
condition ? value_if_true : value_if_false;
```

Example:

```javascript
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
```

---

### 8️⃣ Type Operator

### `typeof`

Used to check data type.

```javascript
let name = "John";
console.log(typeof name); // string
```

---

### 9️⃣ Optional Chaining (Modern JS)

Used to safely access object properties.

```javascript
let user = {};

console.log(user.address?.city); // undefined (no error)
```

---

### 🔟 Nullish Coalescing Operator (`??`)

Returns right side if left side is `null` or `undefined`.

```javascript
let name = null;
let displayName = name ?? "Guest";

console.log(displayName); // Guest
```


---

## **Control Flow**

**Control flow** means the order in which JavaScript executes your code.

By default, JavaScript runs code **line by line (top to bottom)**.
But sometimes, we want to:

* ✅ Make decisions
* 🔁 Repeat code
* ⏭ Skip certain parts


---

## Types of Control Flow in JavaScript

There are mainly **three types**:

### 1️⃣ Sequential Control Flow

Code runs line by line.

```javascript
let a = 5;
let b = 10;
console.log(a + b);
```

✔ Runs from top to bottom.

---

### 2️⃣ Conditional Control Flow (Decision Making)

Used to make decisions based on conditions.

Examples:

* `if`
* `if...else`
* `else if`
* `switch`
* Ternary operator (`? :`)

---

### 3️⃣ Looping Control Flow (Iteration)

Used to repeat code multiple times.

Examples:

* `for`
* `while`
* `do...while`

---

## **If Statement in JavaScript**

The **if statement** is used to execute code only if a condition is true.

---

## ✅ 1. Basic if Statement

### Syntax

```javascript
if (condition) {
   // code runs if condition is true
}
```

### Example

```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}
```

✔ If condition is `true`, block runs.
✔ If `false`, it skips.

---

## ✅ 2. if...else Statement

Used when you want two possible outcomes.

### Syntax

```javascript
if (condition) {
   // runs if true
} else {
   // runs if false
}
```

### Example

```javascript
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## ✅ 3. if...else if...else Statement

Used for multiple conditions.

## 🔹 Syntax

```javascript
if (condition1) {
   // block 1
} else if (condition2) {
   // block 2
} else {
   // default block
}
```

### Example

```javascript
let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

✔ Conditions are checked from top to bottom.
✔ First true condition executes.

---

## ✅ 4. Nested if Statement

An if inside another if.

### Syntax

```javascript
if (condition1) {
   if (condition2) {
      // code
   }
}
```

### Example

```javascript
let age = 20;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Entry allowed");
  }
}
```

---

## ✅ 5. Using Logical Operators in if

You can combine conditions:

* `&&` → AND
* `||` → OR
* `!` → NOT

```javascript
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed");
}
```

---

## 🧠 Truthy and Falsy in Conditions

JavaScript converts values to true or false automatically.

### ❌ Falsy values:

* `false`
* `0`
* `""`
* `null`
* `undefined`
* `NaN`

Everything else is ✅ Truthy.

## **Switch Statement in JavaScript**

The **`switch` statement** is another way to make decisions in JavaScript.
It is useful when you have **multiple conditions** based on a single value.

Unlike `if...else if`, a `switch` can make your code **cleaner and easier to read**.

---

### ✅ Syntax

```javascript
switch (expression) {
  case value1:
    // code to run if expression === value1
    break;
  case value2:
    // code to run if expression === value2
    break;
  ...
  default:
    // code to run if none of the cases match
}
```

> **Important:** Use `break` to stop execution after a case.
> Without `break`, JavaScript will continue to the next case (**fall-through**).

---

### Example 1: Basic Switch

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  default:
    dayName = "Unknown day";
}

console.log(dayName);
```

**Output:**

```
Wednesday
```

---

# **Loops (Repeating Code)**

**Loops** are used to **repeat a block of code** multiple times until a condition is met.
They help avoid writing the same code again and again.

---

### Types of Loops in JavaScript

1. `for` loop
2. `while` loop
3. `do...while` loop
4. `for...of` loop (for arrays/iterables)
5. `for...in` loop (for objects)

---

### 1️⃣ For Loop

Used when you know **how many times** you want to repeat the code.

### 🔹 Syntax

```javascript
for (initialization; condition; increment/decrement) {
    // code to run
}
```

### 🔹 Example

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}
```

**Output:**

```
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```

---

### 2️⃣ While Loop

Used when you want to repeat code **until a condition is false**.

### 🔹 Syntax

```javascript
while (condition) {
    // code to run
}
```

### 🔹 Example

```javascript
let i = 1;
while (i <= 5) {
    console.log("Count: " + i);
    i++;
}
```

**Output:**

```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

---

### 3️⃣ Do...While Loop

Runs the code **at least once**, then checks the condition.

### 🔹 Syntax

```javascript
do {
    // code to run
} while (condition);
```

### 🔹 Example

```javascript
let i = 1;
do {
    console.log("Step: " + i);
    i++;
} while (i <= 5);
```

**Output:**

```
Step: 1
Step: 2
Step: 3
Step: 4
Step: 5
```

> Even if the condition is `false`, `do...while` executes once.

---

### 4️⃣ For...of Loop (For Arrays / Iterables)

Iterates through **elements of an array** or other iterable objects.

### 🔹 Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

**Output:**

```
Apple
Banana
Mango
```

---

### 5️⃣ For...in Loop (For Objects)

Iterates through **keys (properties) of an object**.

### 🔹 Example

```javascript
let person = { name: "John", age: 30, city: "NY" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

**Output:**

```
name: John
age: 30
city: NY
```


---

# **Functions (Reusable Code)**

A **function** is a reusable block of code designed to perform a specific task.
It runs only when it is **called (invoked)**.

---

## 🔹 Basic Function Syntax

```javascript
function functionName(parameters) {
  // code to execute
  return value; // optional
}
```

* **function** → keyword to define a function
* **functionName** → name of the function
* **parameters** → inputs (optional)
* **return** → sends a result back (optional)

## Parameter and Argument

* **Parameter** → A variable in the **function definition**.
* **Argument** → The actual value passed when the function is **called**.

## How to Run a Function
* **Run a function** → Call the function using its name followed by parentheses `()`.

### Example:

```javascript
function greet(name) {   // name = parameter
  return "Hello " + name;
}


greet("Sarah"); // "Sarah" = argument
```

## **Types of Functions**

### 1️⃣ Function Declaration

```javascript
function add(a, b) {
  console.log(a + b);
}

add(5,6);
```

---

### 2️⃣ Function Expression

```javascript
const multiply = function(a, b) {
  console.log(a * b);
};

multiply(5,6);
```

---

### 3️⃣ Arrow Function (ES6)

```javascript
const divide = (a, b) => {
  console.log(a / b);
};

divide(4,2)
```

---

## `return` sends a value back

### 4️⃣ Calling One Function Inside Another

```javascript
function formatName(first, last) {
  return first + " " + last;
}

function welcomeUser(first, last) {
  return "Welcome, " + formatName(first, last);
}
```

✔ Functions can reuse other functions

---

### 5️⃣ Callback Function

A function passed as an argument to another function.

```javascript
function processUserInput(name, callback) {
  return callback(name);
}
```

✔ Common in events and asynchronous JavaScript

---

# **🌐 JavaScript in HTML**
JavaScript can be added inside an HTML file using the <script> tag.

It allows you to make your webpage interactive.


There are **3 common ways to add JavaScript to HTML**:

## 1. Inline JavaScript

JavaScript is written **directly inside an HTML tag**.

```html
<button onclick="alert('Hello World')">Click Me</button>
```

**Use case:**
Small actions like button clicks.

**Not recommended** for large projects because it mixes HTML and JS.

---

## 2. Internal JavaScript

JavaScript is written inside the `<script>` tag within the HTML file.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JS</title>
</head>
<body>

<button onclick="showMessage()">Click</button>

<script>
function showMessage(){
    alert("Hello World");
}
</script>

</body>
</html>
```

**Use case:**
Small projects or quick testing.

---

## 3. External JavaScript (Best Practice)

JavaScript is written in a **separate `.js` file** and linked to HTML.

**HTML**

```html
<script src="script.js"></script>
```

**script.js**

```javascript
function showMessage(){
    alert("Hello World");
}
```

**Advantages**

* Cleaner HTML
* Reusable code
* Easier maintenance
* Faster loading with caching

---
---

