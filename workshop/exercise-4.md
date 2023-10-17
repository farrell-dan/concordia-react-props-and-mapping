# Exercise 4: App and users

**This exercise will make use of what you saw in Topics 1 and 2**

---

### **STEP 1** : create App.js

- Create a file called `App.js` in the `src/components/` folder
- In it, create and export an `App` component
- Have it return a `<main>` with any text inside it (you will change it later)

---

### **STEP 2** : render App.js

- Open your `src/index.js` file
- `import` your App component at the top of the file
- You're currently rendering a `<div>` with four of your components from exercises1-3
- Render the App component after your other components (it should now be the final child of the `<div>` that the root is rendering.)
- Verify that it is working by checking your browser

---

### **STEP 3** : users from data

Take a look at the `users.js` file in `src/data`. It has a single default export that is an array. This means if you import it, whatever variable name you create when you import it, will point to that array in memory. We're going to assume, for the sake of the instructions, that you import it under the variable name of `users`.

Your goal is to:

1. import the users in your `index.js` file
2. pass that array to your `App` component through props
3. receive the array in your `App` component.

You will need to work in both of these files to accomplish this task (you will not need to add an import in `App.js`).

`console.log(users)` inside the function defintion of your App component. Once you see an array in the browser's console, you're ready to move to [exercise-5](./exercise-5.md)!

If you're having difficulty, try logging the `users` in your `index.js` file. You should see the array in your browser. If you don't see it, you probably have the wrong path and perhaps you could use a [hint](./hints/e4h1.md)!

[Previous Exercise](./exercise-3.md)

[Back to the README.md](../README.md)

[Next Exercise](./exercise-5.md)
