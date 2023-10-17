# Exercise 1: Create a React environment

**This exercise will make use of what you saw in Lecture Topic 2 From React Intro and Components**

---

There is a new file you're going to encounter in the `public` and `src/components` folders named `.gitkeep`. It serves no purpose related to React, so you can just ignore it.

Why is it there? When pushing code to GitHub, Git doesn't allow the pushing of an empty folder. `.gitkeep` gets around this.

---

### **STEP 1** : create index.html

- The `index.html` file should be in the `public` folder
- Visual Studio Code's html:5 autofill will do
  - If you don't use the autofill, then any base HTML template should do
- Don't forget the element with an id of "root"

---

### **STEP 2** : create package.json

- The `package.json` should be in the repo's folder (default name is "react-props-and-arrays")
- You'll need to execute `yarn init`
- Use `yarn add` to add the needed modules to your `dependencies` field
- Add a `scripts` field (this doesn't require a terminal command)
- The `scripts` field needs one specific script key-value pairing to load your React application

We can actually tell React which port number we want it to run out of.

By default, it launches from port 3000.

If 3000 is in use, it will go up until it finds a free port.

Let's set the port number we want React hosted on to 3002:

`"start": "PORT=3002 react-scripts start"`

---

### **STEP 3** : create index.js

- The `index.js` file should be in the `src` folder
- You'll need one import
- You'll need to call the `createRoot` method
- For now, render `<div> Something witty </div>`

### **STEP 4** : start your application

- Use the start command you wrote in Step 2
- It should load up in your browser
- You should see the text you put in the `<div>` at the end of Step 3

There are many potential errors your can get during exercise-1.

Several of these errors were covered at the beginning of the previous workshop.

If you encounter a new error, and it doesn't make sense, exercise your google-fu.

Come see us in the queue if you're stuck on the same error for too long.

---

exercise-1 is complete once your React application is loaded in the browser 🎉

[Back to the README.md](../README.md)

[Next Exercise](./exercise-2.md)
