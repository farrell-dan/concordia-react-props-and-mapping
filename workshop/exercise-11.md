# Exercise 11: Add images

---

Exercise-6 of the first workshop (react-intro-and-components) guided you through two different ways two provide a `src` to an `img`:

1. a string path from the `public` folder
2. an import made locally in a component

Surprise, there is another way:

3. a `require` expression

`require` is a lot like `import`, except it is executed like a function and expects a path as an argument.

```jsx
<img src={require("./gandalf.jpg")} alt={user.name} />
```

The above is a valid `src` provided there is a file `gandalf.jpg` **in the same folder** as the component file that renders this `<img>`. Of course the path doesn't have to point to the same folder the component is in.

Thinking big picture **(mind the pun)**, in a moderately sized application, if you put all the components of your application directly in `/src/components`, you'll end up with way too many files in that folder. Eventually, you'll have multiple folders in the "components" folder. Imagine how messy your code would get you if had various images in a bunch of different folders...

---

### **STEP 1** : assets

- create a folder named `assets` in the `/src` folder
- search the internet for a picture of each user
- save the image/print screen and place the files in your new folder

---

### **STEP 2** : test one `<img>`

Your `User` component should be rendering an `<li>`. Render an `<img>` element somewhere in it (where might depend on where you want the image to be)

Your src should look something like: `src={require("../assets/gandalf.jpg")}`

Verify that it appears in the DOM. The same image should be appearing for all of your users.

You may want to give it a `className` and restrict its size, or apply other CSS properties to it.

---

### **STEP 3** : render all images

So you've hard coded one `src`, but what about the rest? Given a user object that looks like:

```js
{
	name: "Gandalf the Grey",
	age: "2000 - 24'000",
	"skills and traits": ["Maiar magic", "Knowledge","Camaraderie"],
	fiction: "J. R. R. Tolkien's The Lord of the Rings",
	wiki: "https://en.wikipedia.org/wiki/Gandalf",
	id: "9780261102439"
}
```

How do you provide the `src={require("../assets/gandalf.jpg")}`? What if the files have different extensions?

We'll offer two solutions. You can use either for this exercise, but it's good to know about both.

1. Add a new key value pairing to each user object (by modifying the `users.js` file). If you add a `src` key to each user object, whose value is `require("SOME_PATH_PLEASE_REPLACE_THIS!")`, you could then feed that path to each `<img>` element: `src={user.src}`

2. Build a utility function, if you make a new file and folder: `/src/utilities/srcProvider.js`, you can create a function called `srcProvider` and export it from this new file. The purpose of this function will be to accept a name or id of a user, and return the required `src`.

This is a great time to make use of a switch. Here is an example:

```js
const srcProvider = (name) => {
  switch (name) {
    case "Ellen Ripley":
      return require("../assets/ripley.png");
    case "Gandalf the Grey":
      return require("../assets/gandalf.jpg");
    // and more
    default:
      console.error("error finding src for name: ", name);
  }
};
export default srcProvider;
```

A default `console.error` here is a great way to signal to yourself that you either forgot something or, as will commonly be the case, made a typo. Watch those file extensions, `jpeg !== jpg`

To make use of this `srcProvider`, import it in `User.js`, and pass the `src` of your `<img>` the **execution** of this utility. Don't forget to pass it the argument it is expecting!

This solution may seem overengineered for this workshop, and you're right! However, this solution is closer to a real world solution. It may be the case that there are thousands of images that your application makes use of - they are all going to be served with your React application. So typically you will point the `src` to an `http` / `https` address. You can use a utility like this to form them, as they should be systematically made (likely using an `id` as these are unique - unlike names).

---

Here is an example of a completed exercise-11 that uses some tricky CSS to make the `<img>` appear like a background image:

![browser after completing exercise-11](./assets/post-exercise-11.png)

[Previous Exercise](./exercise-10.md)

[Back to the README.md](../README.md)
