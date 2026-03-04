# **PHP**

**PHP (Hypertext Preprocessor)** is a server-side scripting language used to build dynamic websites and web applications.

It runs on the **server**, not in the browser.

PHP files use the `.php` extension.


**Popular websites built with PHP:**

* Facebook (originally built with PHP)
* WordPress (runs on PHP)
* Wikipedia

---

# 🛠️ **Setting Up PHP**

To run PHP on your computer, install:

* **XAMPP** (easy for beginners)
* **WAMP** (Windows)
* **MAMP** (Mac)

These packages include:

* Apache (web server)
* PHP
* MySQL (database)

After installing:

1. Start Apache
2. Put your PHP files inside the `htdocs` folder
3. Open browser → `http://localhost/filename.php`

---

# **Basic PHP Syntax**
- PHP code is written inside special tags, which allow it to be embedded within HTML. 

```php
<?php
// Your PHP code here
?>
```
- Every PHP statement must end with a semicolon ;

---



# **Variables**

```php
<?php
$name = "John";
$age = 25;

echo $name;
?>
```

Rules:

* Variables start with `$`
* No need to declare data type

---

## **Variable Scope in PHP**

**Variable scope** defines where a variable can be accessed or used in your code.

PHP has **three main types of scope**:

1. **Local Scope**
2. **Global Scope**
3. **Static Scope**

### 1️⃣ Local Scope

A variable declared **inside a function** can only be used inside that function.

```php
<?php
function test() {
    $x = 10;   // Local variable
    echo $x;
}

test();   // Works
// echo $x;  ❌ Error (cannot access outside)
?>
```

### 2️⃣ Global Scope

A variable declared **outside a function** is called a global variable.

```php
<?php
$y = 20;   // Global variable

function show() {
    // echo $y; ❌ Error
}

echo $y;  // ✅ Works
?>
```

By default, global variables **cannot be used inside functions**.

#### Using `global` Keyword

To use a global variable inside a function:

```php
<?php
$y = 20;

function show() {
    global $y;
    echo $y;
}

show();  // Outputs: 20
?>
```

---

### 3️⃣ Static Scope

Normally, when a function finishes, its local variables are deleted.

But if you use `static`, the variable keeps its value between function calls.

```php
<?php
function counter() {
    static $count = 0;
    $count++;
    echo $count . "<br>";
}

counter(); // 1
counter(); // 2
counter(); // 3
?>
```

Without `static`, it would always print `1`.

---

# **Data Types**
**Data types** define the type of information a variable can store.

* String → `"Hello"`
* Integer → `10`
* Float → `10.5`
* Boolean → `true` / `false`
* Null → `NULL`
* Array → `array()`

---

# **Type Casting in PHP**

Type casting converts a variable from **one data type to another**.

**Syntax:**

```php
$newVar = (type) $variable;
```

**Types:** `(int)`, `(float)`, `(string)`, `(bool)`, `(array)`, `(object)`


### **Examples**

```php
$var = "123.45";
$intVar = (int)$var;      // 123
$floatVar = (float)$var;  // 123.45
$strVar = (string)100;    // "100"
$boolVar = (bool)0;       // false
$arrayVar = (array)"Hi";  // ["Hi"]
$objVar = (object)["a"=>1]; // object with property a=1
```

**Notes:**

* Boolean casting: 0, "", NULL → false; everything else → true
* Integer casting truncates decimals

---

# Operators
Operators are **symbols that perform operations** on variables and values

### **1. Arithmetic Operators**

Used for **mathematical calculations**:

| Operator | Description    | Example  | Output |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | `5 + 3`  | 8      |
| `-`      | Subtraction    | `5 - 3`  | 2      |
| `*`      | Multiplication | `5 * 3`  | 15     |
| `/`      | Division       | `6 / 3`  | 2      |
| `%`      | Modulus        | `5 % 3`  | 2      |
| `**`     | Exponentiation | `2 ** 3` | 8      |

---

### **2. Assignment Operators**

Used to **assign values** to variables:

| Operator | Example   | Meaning       |
| -------- | --------- | ------------- |
| `=`      | `$a = 5`  | Assign 5      |
| `+=`     | `$a += 3` | `$a = $a + 3` |
| `-=`     | `$a -= 2` | `$a = $a - 2` |
| `*=`     | `$a *= 2` | `$a = $a * 2` |
| `/=`     | `$a /= 2` | `$a = $a / 2` |
| `%=`     | `$a %= 2` | `$a = $a % 2` |

---

### **3. Comparison Operators**

Used to **compare values**:

| Operator | Example     | Output                              |
| -------- | ----------- | ----------------------------------- |
| `==`     | `$a == $b`  | True if equal                       |
| `===`    | `$a === $b` | True if equal & same type           |
| `!=`     | `$a != $b`  | True if not equal                   |
| `!==`    | `$a !== $b` | True if not equal or different type |
| `<`      | `$a < $b`   | True if less                        |
| `>`      | `$a > $b`   | True if greater                     |
| `<=`     | `$a <= $b`  | True if less or equal               |
| `>=`     | `$a >= $b`  | True if greater or equal            |

---

### **4. Increment / Decrement Operators**

Used to **increase or decrease** values:

| Operator | Example        | Meaning              |
| -------- | -------------- | -------------------- |
| `++$a`   | Pre-increment  | Increment before use |
| `$a++`   | Post-increment | Increment after use  |
| `--$a`   | Pre-decrement  | Decrement before use |
| `$a--`   | Post-decrement | Decrement after use  |

---

### **5. Logical Operators**

Used in **conditional statements**:

| Operator | Example     | Meaning                           |     |                        |     |                  |
| -------- | ----------- | --------------------------------- | --- | ---------------------- | --- | ---------------- |
| `&&`     | `$a && $b`  | True if both true                 |     |                        |     |                  |
| `        |             | `                                 | `$a |                        | $b` | True if any true |
| `!`      | `!$a`       | True if $a is false               |     |                        |     |                  |
| `and`    | `$a and $b` | Same as `&&` but lower precedence |     |                        |     |                  |
| `or`     | `$a or $b`  | Same as `                         |     | ` but lower precedence |     |                  |
| `xor`    | `$a xor $b` | True if only one true             |     |                        |     |                  |

---

### **6. String Operators**

Used to **concatenate strings**:

| Operator | Example              | Output           |
| -------- | -------------------- | ---------------- |
| `.`      | `"Hello" . " World"` | Hello World      |
| `.=`     | `$str .= "!"`        | Append to string |

---

### **7. Array Operators**

Used to **compare or combine arrays**:

| Operator | Example     | Meaning                            |
| -------- | ----------- | ---------------------------------- |
| `+`      | `$a + $b`   | Union of arrays                    |
| `==`     | `$a == $b`  | True if equal                      |
| `===`    | `$a === $b` | True if equal & same order         |
| `!=`     | `$a != $b`  | True if not equal                  |
| `!==`    | `$a !== $b` | True if not equal or order differs |

---

### **8. Conditional (Ternary) Operator**

Shorthand **if-else**:

```php
<?php
$age = 20;
echo ($age >= 18) ? "Adult" : "Minor"; // Output: Adult
?>
```

---

# **Localhost**

- **localhost** is a hostname that points to your own computer. 
- It uses the **loopback network interface**, meaning any request sent to localhost stays on your device. 

---

## **How to Access Localhost**

**Using a Web Browser**

   * Open any web browser (Chrome, Firefox, Edge).
   * Type **`http://localhost`** or **`http://127.0.0.1`** in the address bar.

---

## **Benefits of Localhost**

1. **Safe Testing Environment**

   * Test apps, websites, or scripts without exposing them to the internet.

2. **Faster Development**

   * Access your server or app locally, avoiding network delays.

3. **No Internet Needed**

   * Since everything runs on your own machine, you don’t need a live connection.

4. **Debugging & Troubleshooting**

   * Errors can be detected and fixed before deployment.

5. **Security**

   * Localhost is isolated from external networks, reducing security risks during development.

6. **Experimentation**

   * Try different configurations, databases, or servers without affecting production systems.

---

# **Different Ways to Print Data in PHP**

**1. Basic Output with echo**

```php
$name = "Alice";
echo "Hello, $name!"; 
```

* Output: 
```
  Hello, Alice!
```

**2. Debugging Variable Structure with print_r**

```php
$fruits = array("apple", "banana", "orange");
print_r($fruits);
```

* Output: 
```
Array
(
    [0] => apple
    [1] => banana
    [2] => orange
)
```

**3. In-depth Debugging with var_dump**

```php
$person = array(
  "name" => "Bob",
  "age" => 30,
  "hobbies" => array("reading", "hiking")
);
var_dump($person);

```
* Output: 
```
array(3) {
  ["name"]=>
  string(3) "Bob"
  ["age"]=>
  int(30)
  ["hobbies"]=>
  array(2) {
    [0] =>
    string(6) "reading"
    [1] =>
    string(5) "hiking"
  }
}
```

---
---


### 3️⃣ If-Else

Here’s a clear explanation of **`if` statements in PHP** with examples:

---

## **Basic `if` Statement**

The `if` statement is used to execute code **only if a condition is true**.

```php
<?php
$age = 18;

if ($age >= 18) {
    echo "You are an adult.";
}
?>
```

**Explanation:**

* `$age >= 18` is the condition.
* If it evaluates to `true`, the code inside `{ }` runs.
* Output:

```
You are an adult.
```

---

## **`if-else` Statement**

Use `else` to run code **when the condition is false**.

```php
<?php
$age = 16;

if ($age >= 18) {
    echo "You are an adult.";
} else {
    echo "You are a minor.";
}
?>
```

**Output:**

```
You are a minor.
```

---

## **`if-elseif-else` Statement**

Use `elseif` for **multiple conditions**.

```php
<?php
$marks = 75;

if ($marks >= 90) {
    echo "Grade A";
} elseif ($marks >= 75) {
    echo "Grade B";
} elseif ($marks >= 50) {
    echo "Grade C";
} else {
    echo "Fail";
}
?>
```

**Output:**

```
Grade B
```

---

## **Short Syntax (Ternary Operator)**

For simple conditions, you can use a ternary operator:

```php
<?php
$age = 20;
echo ($age >= 18) ? "Adult" : "Minor";
?>
```

**Output:**

```
Adult
```

---

## **Tips**

* Conditions in PHP must be inside parentheses `()`.
* Code blocks are wrapped in `{ }`.
* You can nest `if` statements inside each other for more complex logic.

---

If you want, I can also show a **visual flowchart of how PHP `if` statements work**, which makes it really easy to understand the logic.

Do you want me to make that?


---

### 4️⃣ Loops

**For Loop**

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo $i;
}
?>
```

**While Loop**

```php
<?php
$i = 1;
while ($i <= 5) {
    echo $i;
    $i++;
}
?>
```

---

### 5️⃣ Functions

```php
<?php
function greet($name) {
    return "Hello " . $name;
}

echo greet("John");
?>
```

---

## 📝 4. Working With Forms

### HTML Form

```html
<form method="post">
    Name: <input type="text" name="username">
    <input type="submit">
</form>
```

### PHP Handling Form

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["username"];
    echo "Hello " . $name;
}
?>
```

---

## 🗄️ 5. Connecting PHP to MySQL

```php
<?php
$conn = mysqli_connect("localhost", "root", "", "testdb");

if (!$conn) {
    die("Connection failed");
}

echo "Connected successfully!";
?>
```

---

## 🎯 6. Why Learn PHP?

✅ Easy for beginners
✅ Huge community
✅ Powers many websites
✅ Good for backend development
✅ Works well with MySQL

---

## 📚 What To Learn Next?

1. PHP Arrays in depth
2. Sessions & Cookies
3. MySQL CRUD operations
4. OOP in PHP
5. Build a small project (login system)

---

If you want, I can:

* Create a **30-day PHP learning roadmap**
* Give you **practice exercises**
* Help you build a **simple project step-by-step**

Just tell me 😊
