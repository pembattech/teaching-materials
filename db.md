# **Database**
---


A **database** is a structured system used to store, organize, and manage data electronically so it can be easily accessed, updated, and analyzed.

# **Types of Databases**

## **1. Relational Databases**

![Image](https://www.researchgate.net/publication/316216480/figure/fig2/AS%3A484549902770179%401492537107959/example-of-relational-table.png)




Data is stored in **tables**, and tables can be related to each other.

Each table:

* Has **rows** (records)
* Has **columns** (fields)
* Uses **keys** to create relationships

### Example

You might have:

**Users Table**

| id | name | email |
| -- | ---- | ----- |

**Orders Table**

| id | user_id | product |
| -- | ------- | ------- |

Here:

* `user_id` connects Orders to Users.
* This creates a **relationship** (One user → Many orders).

---

### 🔑 **Key Characteristics**

* Structured data
* Fixed schema (columns defined in advance)
* Uses SQL
* Strong data consistency
* Best for financial systems, admin systems, dashboards

---

### ✅ **Popular Relational Databases**

* MySQL
* PostgreSQL
* Microsoft SQL Server
* SQLite

---

## 🟩 **NoSQL Databases**

![Image](https://www.mongodb.com/community/forums/uploads/default/original/2X/d/ded7cefecee3b2b0b9dd0cc0e3d88a980da98aa2.png)


**NoSQL databases** do not rely on fixed tables like relational databases.

Instead, they store data in formats like:

* 📄 Documents (JSON-like)
* 🔑 Key–Value pairs
* 📊 Graphs
* 📦 Wide-column stores

---

### Example (Document Style)

Instead of splitting user and orders into separate tables, you might store:

```json
[
  {
    "name": "John",
    "orders": [
      { "product": "Laptop" },
      { "product": "Phone" }
    ]
  },
  {
    "name": "Alice",
    "orders": [
      { "product": "Tablet" },
      { "product": "Headphones" }
    ]
  }
]
```


### ✅ **Popular NoSQL Database**

* MongoDB
* Cassandra

---

### **When to Use NoSQL?**

* Rapid development
* Flexible or changing data structure
* Large-scale systems
* Real-time apps


---
## **Basic Database Concepts**


| Term        | Meaning                      |
| ----------- | ---------------------------- |
| Table       | A collection of related data |
| Row         | One record                   |
| Column      | One field (attribute)        |
| Primary Key | Unique ID for each row       |
| Foreign Key | Links between tables         |
| Query       | A request for data           |

---

## **SQL**

SQL = **Structured Query Language**

It is the language used to interact with relational databases.

There are four main types of SQL operations (CRUD):

* **C**reate → `INSERT`
* **R**ead → `SELECT`
* **U**pdate → `UPDATE`
* **D**elete → `DELETE`


### Example Queries

```sql
SELECT * FROM students; --select all columns of student table

INSERT INTO students (name, age) VALUES ('Alice', 20); --insert value into the students table

UPDATE students SET age = 21 WHERE id = 1; --update age value whose id is 1

DELETE FROM students WHERE id = 1; --delete a row whose id is 1
```

---

































Great 👍 let’s go deeper into each core concept so you truly understand how databases work — not just definitions, but how they behave in real systems.

---

# 📘 Basic Database Concepts (Explained Clearly & Deeply)

---

## 1️⃣ Table

![Image](https://www3.ntu.edu.sg/home/ehchua/programming/sql/images/SampleEmployees.png)

![Image](https://www.w3resource.com/w3r_images/component-of-a-database-table.gif)

![Image](https://www.cs.sjsu.edu/~pearce/modules/lectures/oop/persistence/Databases_files/image006.jpg)

![Image](https://www.researchgate.net/publication/309816039/figure/tbl1/AS%3A668379862024192%401536365585014/Sample-data-of-students-records.png)

### 🔎 What It Really Is:

A **table** is a structured collection of related data stored in rows and columns.

Think of it like:

* An Excel sheet
* A grid
* A structured list of similar items

### 📌 Example:

A `students` table might store:

| id | name | age | email |
| -- | ---- | --- | ----- |

### 🧠 Important Ideas:

* Each table stores **one type of entity** (students, users, products).
* Tables should not mix unrelated data.
* Good database design means keeping tables focused and organized.

---

## 2️⃣ Row (Record)

### 🔎 What It Really Is:

A **row** represents one complete entry in a table.

From the students table:

| id | name | age | email                                   |
| -- | ---- | --- | --------------------------------------- |
| 1  | John | 20  | [john@email.com](mailto:john@email.com) |

That entire line is **one row**.

### 🧠 Important Ideas:

* One row = one real-world object.
* Each row should be uniquely identifiable.
* Rows grow as your system collects more data.

---

## 3️⃣ Column (Field / Attribute)

### 🔎 What It Really Is:

A **column** defines what type of data is stored.

In the students table:

* `id` → number
* `name` → text
* `age` → number
* `email` → text

### 🧠 Important Ideas:

* Columns define the **structure (schema)** of the table.
* Each column has a **data type** (INT, VARCHAR, DATE, etc.).
* Data types protect data integrity.

Example:

* Age should be a number.
* Email should be text.

---

## 4️⃣ Primary Key

### 🔑 What It Really Is:

A **primary key** is a column (or combination of columns) that uniquely identifies each row.

Example:

| id | name  |
| -- | ----- |
| 1  | John  |
| 2  | Alice |

Here, `id` is the primary key.

### 📌 Rules of a Primary Key:

* Must be **unique**
* Cannot be NULL
* Only one primary key per table

### 🧠 Why It’s Important:

* Prevents duplicate records
* Helps databases find rows quickly
* Used to connect tables

Without primary keys, your database becomes messy and unreliable.

---

## 5️⃣ Foreign Key

![Image](https://creately.com/static/assets/guides/foreign-key-in-er-diagram/simple-customer-and-orders-er-diagram-e0ARXrf434i.svg)

![Image](https://images.ctfassets.net/w6r2i5d8q73s/QDa5oq16N1ifmlWC6Dnu2/a52db5fdedc3e933c865bbd3575e903b/technical_diagramming_01_database_diagram_product_image_EN_standard_4_3_2x.png?fm=webp\&q=75)

![Image](https://i.sstatic.net/FIz97.png)

![Image](https://home.ubalt.edu/ntsbfowl/Access%20Tutorial/relationships2.jpg)

### 🔎 What It Really Is:

A **foreign key** is a column in one table that refers to the primary key in another table.

### Example:

**Users Table**

| id | name |
| -- | ---- |
| 1  | John |

**Orders Table**

| id | user_id | product |
| -- | ------- | ------- |
| 1  | 1       | Laptop  |

Here:

* `users.id` → Primary Key
* `orders.user_id` → Foreign Key

### 🧠 Why It Matters:

* Connects related data
* Maintains data integrity
* Prevents invalid relationships

Without foreign keys, you could create an order for a user that doesn’t exist.

---

## 6️⃣ Query

### 🔎 What It Really Is:

A **query** is a request sent to the database.

You use queries to:

* Retrieve data
* Insert data
* Update data
* Delete data

### Example:

```sql
SELECT * FROM students;
```

This asks:
👉 “Give me all students.”

---

### 🧠 Types of Queries

1. **SELECT** → Get data
2. **INSERT** → Add data
3. **UPDATE** → Modify data
4. **DELETE** → Remove data

Together, these are called **CRUD operations**.

---

# 🔥 Bonus Concepts Beginners Should Also Know

---

## 📌 Schema

The blueprint of the database.
It defines:

* Tables
* Columns
* Data types
* Relationships

---

## 📌 Index

Improves search speed.

Without index:

* Database scans every row (slow)

With index:

* Database jumps directly to the data (fast)

---

## 📌 Constraint

Rules applied to columns.

Examples:

* NOT NULL
* UNIQUE
* PRIMARY KEY
* FOREIGN KEY

Constraints protect your data.

---




---
