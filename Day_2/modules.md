# Node.js Course Notes

## 📅 Day-2: Node.js Modules

### 📌 What are Modules?

- A **module** in Node.js is like a **reusable block of code**.
- Helps keep code **organized, maintainable, and reusable**.

---

### 🟢 Core Modules

- Built-in modules that come with Node.js.
- Example:
  - `http` → create server.
  - `fs` → file system operations.
  - `path` → handle file paths.
  - `os` → system-related info.

👉 Usage Example:

```js
const fs = require("fs");
fs.writeFileSync("test.txt", "Hello from Node.js");
```

---

### 🟡 Local Modules

- Custom modules created by developer.
- Defined in separate `.js` files and imported using `require()`.

👉 Example:
**math.js**

```js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

**_app.js_**

```js
const add = require("./math");
console.log(add(5, 10)); // 15
```

---

### 🔵 Third-Party Modules

- Installed from **NPM (Node Package Manager)**.
- Example: `express`, `mongoose`, `lodash`.

👉 Install Example:

```bash
npm install express
```

👉 Usage Example:

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### 💡 Summary

- **Core Modules** → Built-in.
- **Local Modules** → Custom (user-defined).
- **Third-Party Modules** → Installed via NPM.
