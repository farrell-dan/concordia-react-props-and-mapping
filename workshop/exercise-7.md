# Exercise 7: Make `Users` and `User` components

**This exercise will make use of what you saw in Topic 6**

---

Remember, we want our components to be clean and easy to read.

Imagine you had several arrays to map through in a single component, the return/JSX would quickly become cluttered and hard to read.

We're going to re-factor some of the code you wrote. The outcome is how you should be aiming to build components. In practice, you may find yourself ignoring this and focusing on functionality. Just remember: you can always re-factor later.

---

### **STEP 0** : push your work to github

It's possible that you don't complete this exercise. It's also likely that during this transition, your React application will crash in the browser. In either case, you want to have saved a submittable version of your work that met the first checkpoint.

---

### **STEP 1** : comment out some code

If you're not sure how to comment out code in the return of a component, feel free to read this [hint](./hints/e7h1.md)!

Your goal is to comment out the mapping of your `users`:

- Open your `App.js` component
- Begin a multi-line comment out at the beginning of your `<ul>`'s content
- End the multi-line comment out just before your closing `</ul>` tag

If you use the inspector in your browser, you should see an empty `<ul></ul>` in the DOM.

_Note: VS Code can do this for you if you highlight all the lines you want coded out and select Edit>Toggle Line Comment (or use the shortcut which is `command + /` on Mac and `CTRL + /` on Windows by default)._

---

### **STEP 2** : `Users` component

- Make a new component: `Users.js`
- It should accept `users` as a prop
  - that `users` prop will be the array we mapped from in App.js
- In the return of `Users`, copy/paste over what you commented out from App.js ¹
- Import `Users` in `App.js`
- Render it inside your `<ul>` (make sure it isn't commented out)
- Pass the `users` array to the `Users` component through props

Once you're done, you will be back to where you were before you commented out the code in App.js. In fact, if you un-comment out the code, you'll now see two duplicate rendered lists in the browser/DOM. If you have this working without error, then you can delete what you originally commented out. Suddenly your `App`'s return looks quite clean, and by the very name of the component `Users` you have an understanding of what it should produce in the DOM.

¹ You may struggle to remove the syntax errors during this transition. This [hint](./hints/e7h2.md) should help you understand what is going on.

---

### **STEP 3** : `User` component

Any time you're mapping an array, you should probably build a component as the callback function.

Again, this serves to clean up your JSX's return. It also makes your code base more re-usable, as perhaps you'll need to render that same component somewhere else as a one-off.

- Make a new component: `User.js`
- It should accept a `user` through props
- In the return of `User`, copy/paste over the `<li>` from `Users.js` (including the opening and closing `<li>` tags)
- Import `User` in `Users.js`
- Render your `User` component in your `map`'s callback function instead of the `<li>`
- Remove the `<li>` from `Users.js`
- Clean up your warnings (note: You no longer need to provide a `key` anywhere in `User.js`)

[Previous Exercise](./exercise-6.md)

[Back to the README.md](../README.md)

[Next Exercise](./exercise-8.md)
