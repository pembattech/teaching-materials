
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->


# **🖥️ DOM (Document Object Model) in JavaScript**

The **DOM** is a **representation of the HTML document as a tree of objects**.

* Each element, attribute, and text node in HTML becomes a **node** in the DOM.
* JavaScript can **read, update, add, or remove nodes** dynamically.

---

## 1️⃣ Selecting DOM Elements

### 🔹 1. `getElementById`

```html
<p id="demo">Hello!</p>
<script>
let p = document.getElementById("demo");
console.log(p);
</script>
```

**Output in console:**

```
<p id="demo">Hello!</p>
```

---

### 🔹 2. `getElementsByClassName` / `getElementsByTagName`

```html
<p class="text">First</p>
<p class="text">Second</p>

<script>
let texts = document.getElementsByClassName("text");
console.log(texts[0].innerText); // Access first element
</script>
```

**Output:**

```
First
```

---

### 🔹 3. `querySelector` & `querySelectorAll` (Modern Way)

```html
<p class="text">Hello</p>

<script>
let para = document.querySelector(".text"); // selects first element
console.log(para.innerText);

let allParas = document.querySelectorAll("p"); // selects all <p> elements
console.log(allParas.length);
</script>
```

**Output:**

```
Hello
2  // if there are two <p> tags
```

> `querySelector` uses **CSS selectors**, so it’s very flexible.

---

## 2️⃣ Changing Content & Attributes

### 🔹 1. Change Text

```html
<p id="demo">Old Text</p>

<script>
let p = document.getElementById("demo");
p.innerText = "New Text!";
</script>
```

**Result on page:**

```
New Text!
```

---

### 🔹 2. Change HTML

```html
<div id="box">Hello</div>

<script>
let box = document.getElementById("box");
box.innerHTML = "<b>Bold Text!</b>";
</script>
```

**Result on page:**

**Bold Text!** (in bold)

---

### 🔹 3. Change Attributes

```html
<img id="logo" src="old.png" alt="Logo">

<script>
let logo = document.getElementById("logo");
logo.src = "new.png"; // update image source
logo.alt = "New Logo"; 
</script>
```

---

## 3️⃣ Adding & Removing Elements

### 🔹 1. Create Element

```javascript
let newPara = document.createElement("p");
newPara.innerText = "I am a new paragraph!";
document.body.appendChild(newPara);
```

**Result:** A new paragraph is added at the end of the page.

---

### 🔹 2. Remove Element

```javascript
let oldPara = document.getElementById("demo");
oldPara.remove();
```

**Result:** The element with id `demo` is removed from the page.


---

## 5️⃣ Changing Styles Dynamically

```javascript
let box = document.getElementById("box");
box.style.backgroundColor = "lightblue";
box.style.fontSize = "20px";
box.style.padding = "10px";
```

**Result:** The element’s style is updated in real-time.

---


---

# 🎯 **DOM Events in JavaScript**

**DOM events** are **actions that happen in the browser**, like:

* Clicking a button
* Typing in an input field
* Hovering over an element
* Submitting a form

JavaScript can **listen** to these events and **run code** when they occur.

---

## 1️⃣ **How to Add Events**

### 🔹 1. Using HTML `onclick` (Old Way)

```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

**Output:** Clicking the button shows an alert.

> ✅ Works but not recommended for large projects because it mixes HTML and JS.

---

### 🔹 2. Using JavaScript `onclick`

```html
<button id="btn">Click Me</button>

<script>
let button = document.getElementById("btn");
button.onclick = function() {
    alert("Button clicked using JS!");
};
</script>
```

**Output:** Clicking the button shows an alert.

> ❌ Limitation: If you assign another `onclick`, it overwrites the first one.

---

### 🔹 3. Using `addEventListener` (Recommended)

```javascript
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    alert("Button clicked with addEventListener!");
});
```

**Output:** Works the same, but you can **add multiple events** without overwriting.

---

## 2️⃣ **Common DOM Events**

| Event       | Description                               |
| ----------- | ----------------------------------------- |
| `click`     | Fired when an element is clicked          |
| `dblclick`  | Fired on double click                     |
| `mouseover` | When mouse moves over an element          |
| `mouseout`  | When mouse leaves an element              |
| `keydown`   | When a key is pressed                     |
| `keyup`     | When a key is released                    |
| `input`     | When input value changes                  |
| `change`    | When input loses focus after value change |
| `submit`    | When form is submitted                    |
| `focus`     | When an element gains focus               |
| `blur`      | When an element loses focus               |

---

## 3️⃣ **Examples**

### 🔹 Click Event

```html
<button id="btn">Click Me</button>

<script>
document.getElementById("btn").addEventListener("click", () => {
    console.log("Button was clicked!");
});
</script>
```

**Output in console:**

```
Button was clicked!
```

---

### 🔹 Mouseover Event

```html
<p id="hoverText">Hover over me!</p>

<script>
let text = document.getElementById("hoverText");
text.addEventListener("mouseover", () => {
    text.style.color = "red";
});
text.addEventListener("mouseout", () => {
    text.style.color = "black";
});
</script>
```

**Result:** Text turns red when hovered, black when mouse leaves.

---

### 🔹 Input Event

```html
<input type="text" id="nameInput" placeholder="Type your name">
<p id="greeting"></p>

<script>
let input = document.getElementById("nameInput");
let greeting = document.getElementById("greeting");

input.addEventListener("input", () => {
    greeting.innerText = "Hello, " + input.value + "!";
});
</script>
```

**Result:** As you type, the paragraph updates in real-time.

---

### 🔹 Form Submit Event

```html
<form id="myForm">
  <input type="text" placeholder="Enter something" id="myInput">
  <button type="submit">Submit</button>
</form>

<script>
let form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Form Submitted!");
});
</script>
```

**Result:** Clicking submit triggers alert **without reloading the page**.

---

## 4️⃣ Removing Events

You can remove an event using `removeEventListener`:

```javascript
function sayHi() {
    console.log("Hi!");
}

button.addEventListener("click", sayHi);

// Later remove it
button.removeEventListener("click", sayHi);
```

---

## 5️⃣ Event Object

When an event occurs, **JavaScript passes an event object** with info about the event:

```javascript
document.getElementById("btn").addEventListener("click", (event) => {
    console.log(event.type); // "click"
    console.log(event.target); // The element clicked
});
```

---

# 📝 **Forms in JavaScript**

A **form** is an HTML element that collects user input. JavaScript can **read input values, validate them, and handle submission** dynamically.

---

## 1️⃣ **Accessing Form Elements**

### HTML Form Example

```html
<form id="myForm">
  <input type="text" id="username" placeholder="Enter username">
  <input type="email" id="email" placeholder="Enter email">
  <button type="submit">Submit</button>
</form>
```

### JavaScript: Get Input Values

```javascript
let username = document.getElementById("username");
let email = document.getElementById("email");

console.log(username.value); // Empty initially
console.log(email.value);    // Empty initially
```

> `.value` gives the current value of an input field.

---

## 2️⃣ **Handling Form Submission**

Forms **reload the page by default** when submitted. To prevent this:

```javascript
let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted!");
});
```

---

## 3️⃣ **Reading Form Values on Submit**

```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = username.value;
    let mail = email.value;

    console.log("Username:", user);
    console.log("Email:", mail);
});
```

**Output (after entering values):**

```
Username: JohnDoe
Email: john@example.com
```

---

## 4️⃣ **Basic Form Validation**

You can check input before submitting:

```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = username.value.trim();
    let mail = email.value.trim();

    if (user === "" || mail === "") {
        alert("Please fill all fields!");
    } else {
        alert("Form submitted successfully!");
        console.log("Username:", user, "Email:", mail);
    }
});
```

> `trim()` removes spaces before and after the input.

---

## 5️⃣ **Real-Time Validation (Optional)**

You can validate as the user types using `input` event:

```javascript
username.addEventListener("input", () => {
    if (username.value.length < 3) {
        username.style.borderColor = "red";
    } else {
        username.style.borderColor = "green";
    }
});
```

**Result:** Border turns red if username is too short, green if valid.

---

## 6️⃣ **Clearing Form After Submission**

```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Form submitted!");

    // Reset form
    form.reset();
});
```

> `.reset()` clears all input fields.

---

## 7️⃣ **Example: Complete Form Handling**

```html
<form id="contactForm">
  <input type="text" id="name" placeholder="Name">
  <input type="email" id="email" placeholder="Email">
  <button type="submit">Submit</button>
</form>

<p id="message"></p>

<script>
let form = document.getElementById("contactForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let msg = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();

    if(name === "" || email === "") {
        msg.innerText = "Please fill all fields!";
        msg.style.color = "red";
    } else {
        msg.innerText = `Thank you, ${name}! We received your email: ${email}`;
        msg.style.color = "green";
        form.reset();
    }
});
</script>
```

**Result:**

* Empty fields → Shows red warning
* Filled fields → Shows green confirmation and clears form

---

## 📌 Summary

| Task                   | JavaScript Method / Property                  |
| ---------------------- | --------------------------------------------- |
| Access input value     | `element.value`                               |
| Prevent form reload    | `event.preventDefault()`                      |
| Reset form             | `form.reset()`                                |
| Validate input         | `if(input.value === "") {}`                   |
| Listen to input events | `element.addEventListener("input", callback)` |

---

# 🖥️ **DOMContentLoaded vs Load Event**

Both events are used to **run JavaScript after a page loads**, but they trigger at **different times**.


## **Key Differences**

| Feature                 | `DOMContentLoaded`           | `load`                                                |
| ----------------------- | ---------------------------- | ----------------------------------------------------- |
| Fires when              | DOM is fully parsed          | Entire page (DOM + images + CSS) loaded               |
| Waits for images/styles | ❌ No                         | ✅ Yes                                                 |
| Typical usage           | Initialize JS, attach events | Start animations, sliders, or image-dependent scripts |
| Speed                   | Faster                       | Slower                                                |

---

# 🧩 **Event Delegation in JavaScript**

**Event Delegation** is a technique where you **attach a single event listener to a parent element** instead of adding listeners to multiple child elements.

When an event occurs on a child, **it bubbles up** to the parent, and you can handle it there.

> This is especially useful when:
>
> * You have **many elements** (like list items)
> * New elements are added **dynamically** after page load

---

## 1️⃣ How Event Delegation Works

* Events in JavaScript **bubble up** from child → parent → ancestor → `document`.
* By listening on a parent, you can **detect which child triggered the event** using `event.target`.

---

## 2️⃣ Example: Without Event Delegation

```html
<ul id="tasks">
  <li>Task 1</li>
  <li>Task 2</li>
  <li>Task 3</li>
</ul>

<script>
let items = document.querySelectorAll("#tasks li");
items.forEach(item => {
    item.addEventListener("click", () => {
        alert("You clicked " + item.innerText);
    });
});
</script>
```

**Problems:**

* Adds an event listener to every `<li>`
* New `<li>` added later **won’t work** unless we attach a listener again

---

## 3️⃣ Example: With Event Delegation

```html
<ul id="tasks">
  <li>Task 1</li>
  <li>Task 2</li>
  <li>Task 3</li>
</ul>

<script>
let taskList = document.getElementById("tasks");

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") { // check if clicked element is <li>
        alert("You clicked " + e.target.innerText);
    }
});

// Add new element dynamically
let newTask = document.createElement("li");
newTask.innerText = "Task 4";
taskList.appendChild(newTask);
```

**Result:**

* Clicking **any `<li>`**, including dynamically added ones, triggers the alert.

---

## 4️⃣ Advantages of Event Delegation

1. ✅ **Fewer Event Listeners** → Better performance
2. ✅ Works with **dynamic elements**
3. ✅ Easier to maintain code

---

## 5️⃣ Key Points

| Concept               | Explanation                                    |
| --------------------- | ---------------------------------------------- |
| `event.target`        | Element that actually triggered the event      |
| `event.currentTarget` | Element that the event listener is attached to |
| Use case              | Lists, tables, buttons created dynamically     |

---

### 6️⃣ Real-World Example: To-Do List

```html
<ul id="todoList">
  <li>Learn JS</li>
  <li>Practice DOM</li>
</ul>
<input type="text" id="taskInput" placeholder="Add task">
<button id="addBtn">Add</button>

<script>
let list = document.getElementById("todoList");
let input = document.getElementById("taskInput");
let btn = document.getElementById("addBtn");

// Event delegation for removing tasks
list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.remove(); // remove clicked task
    }
});

// Add new tasks dynamically
btn.addEventListener("click", () => {
    let taskText = input.value.trim();
    if(taskText !== "") {
        let li = document.createElement("li");
        li.innerText = taskText;
        list.appendChild(li);
        input.value = "";
    }
});
</script>
```

**Result:**

* Clicking any `<li>` removes it
* New tasks added dynamically also work without extra listeners

---

💡 **Pro Tip:**
Whenever you have **many similar elements** or **dynamic content**, always prefer **event delegation** instead of adding multiple listeners.

---


# 💾 **LocalStorage in JavaScript**

**LocalStorage** is a browser feature that allows you to **store key-value pairs** in the user’s browser. Data persists even after **page reload** or **closing the browser**.

### ✅ Key Methods

| Method                             | Description              | Example                                    |
| ---------------------------------- | ------------------------ | ------------------------------------------ |
| `localStorage.setItem(key, value)` | Save a value             | `localStorage.setItem("theme", "dark")`    |
| `localStorage.getItem(key)`        | Retrieve a value         | `localStorage.getItem("theme")` → `"dark"` |
| `localStorage.removeItem(key)`     | Delete a specific value  | `localStorage.removeItem("theme")`         |
| `localStorage.clear()`             | Delete all stored values | `localStorage.clear()`                     |

### 🔹 Example

```javascript
// Save a value
localStorage.setItem("username", "JohnDoe");

// Get a value
let name = localStorage.getItem("username");
console.log(name); // JohnDoe

// Delete a value
localStorage.removeItem("username");

// Clear all
localStorage.clear();
```

---

# 🌗 **Theme Toggle Without LocalStorage**

We can create a **Light/Dark Theme toggle** using **CSS classes and JavaScript**, but the choice will **reset on page reload**.

### HTML

```html
<button id="themeBtn">Switch Theme</button>
<p>Theme changes on button click!</p>
```

### CSS

```css
body {
  background-color: #ffffff;
  color: #000000;
  transition: background-color 0.3s, color 0.3s;
}

body.dark-mode {
  background-color: #121212;
  color: #ffffff;
}
```

### JavaScript

```javascript
let themeBtn = document.getElementById("themeBtn");
let body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    themeBtn.innerText = "Switch to Light Mode";
  } else {
    themeBtn.innerText = "Switch to Dark Mode";
  }
});
```

**Output:**

* Click button → theme toggles
* Reload page → theme **resets to default**

---

# 🌗 **Theme Toggle With LocalStorage**

Now the theme will be made **persistent** using **LocalStorage**, ensuring that the user’s choice remains saved even after the page is reloaded.


### JavaScript with LocalStorage

```javascript
let themeBtn = document.getElementById("themeBtn");
let body = document.body;

// 1️⃣ Apply saved theme on page load
let savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeBtn.innerText = "Switch to Light Mode";
} else {
  themeBtn.innerText = "Switch to Dark Mode";
}

// 2️⃣ Toggle theme and save in localStorage
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeBtn.innerText = "Switch to Light Mode";
    localStorage.setItem("theme", "dark"); // save theme
  } else {
    themeBtn.innerText = "Switch to Dark Mode";
    localStorage.setItem("theme", "light"); // save theme
  }
});

// 3️⃣ Optional: clear saved theme
// localStorage.removeItem("theme");
// localStorage.clear();
```

**Output:**

* Click button → theme toggles
* Reload page → **theme persists** according to saved choice

---
--