# Exercise 2: Create a dynamic component

**This exercise will make use of what you saw in Topic 2**

---

### **STEP 1** : create MyFirstDynamicComponent.js

- This file should be in the `components` folder (i.e. `src/components`)
- Inside this file, define a function
- The function should have the same name as the file (minus the extension)
- Make sure to `export` the function you are defining

---

### **STEP 2** : return some JSX

This is your first dynamic component, so you have a lot of choice with what this renders.

You can make an `<ol>`, a `<p>`, a `<button>`, a `<section>` - pretty much whatever you like.

Just don't think too long on the actual content of the element(s) because...

---

### **STEP 3** : receive and use props

Remember the first parameter of a component definition is its props object.

You can choose whether you deconstruct your property name from the object, or access it later using dot notation.

It's also up to you what name to give your props - though you will have to refer to your choice in exercise-3.

Somewhere in your return, make use of your props.

It has to have a visual impact on what is rendered in the DOM. This mostly limits you to having props affect the content or the CSS.

---

It's hard to know whether or not you've completed exercise-2 without making use of your new component. You'll find out if you were successful in [exercise-3](./exercise-3.md)!

[Previous Exercise](./exercise-1.md)

[Back to the README.md](../README.md)

[Next Exercise](./exercise-3.md)
