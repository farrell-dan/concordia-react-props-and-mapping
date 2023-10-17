# Exercise 8: Make a SkillsAndTraits component

---

Looking at `User.js`, you're mapping through the "skills and traits" array of the user object. You can do some refactoring which will condense your JSX and make it easier to read.

---

- Start by making a new component: `SkillsAndTraits.js`

What prop(s) does it receive... We're in a bit of a bind now aren't we? Remember that the key in the user object is "skills and traits":

```jsx
const SkillsAndTraits = ({skills and traits}) => {
	...
```

The above doesn't work. When you deconstruct from an object, it creates variables of the key names you deconstructed, but variable names can't contain spaces. Instead, you're going to have to choose a different name. Stick with camelCase:

- Your new component should accept `skillsAndTraits` as a prop
- In the return of `SkillsAndTraits`, `map` from your prop
  - the return of your callback should be the same as it is in `User.js`
- Import and render `SkillsAndTraits` in `User.js`¹
- Make sure to remove your old mapping from `User.js` so you don't have two rendered "skills and traits" lists.

¹ **Note: props don't have to have matching key names that match the name of a variable**

```jsx
import ChildComponent from "./ChildComponent";

const SomeComponent = () => {
  const someValue = 42;
  const matching = "Hello";

  return (
    <div>
      <ChildComponent
        matching={matching}
        anotherProp={someValue}
        someProp={[1, 2, 3]}
      />
    </div>
  );
};
```

In the above example, you've seen many cases like the `matching` prop, where you pass a key a value whose name is the same as an existing variable. We don't have to maintain this pattern. `props` are assembled into an object so we can decide to rename the key as we wish. In the case of `anotherProp`, we don't have a variable of that name but there's nothing wrong with passing it a variable of a different name. Recall that we don't even have to pass a variable as a value, we can pass a string or open an expression slot and provide any JS expression, as is the case for `someProp`.

---

In exercise-7 you performed a second layer of refactoring where you created a `User` component to map from `users`.

In this component your map's callback function likely returns one line of HTML. At this point we've likely encountered a point of diminished return where the cost of the refactor isn't worth what we get out of it. We're unlikely to ever need this component elsewhere, and making it produces more lines of code.

All that to say, you've completed exercise 8 and the 100% checkpoint!

[Previous Exercise](./exercise-7.md)

[Back to the README.md](../README.md)

[Next Exercise](./exercise-9.md)
