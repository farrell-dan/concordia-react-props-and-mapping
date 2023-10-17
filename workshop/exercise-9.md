# Exercise 9: Add users

---

## Your instructions

Add some more users into the users array by modifying `src/components/users.js`

Make sure to follow the same format as the previous entries.

---

## Your experiment

Once you have your new entries rendering try making a mistake on purpose as an experiment.

If you forget a field, you may end up with a DOM element that is obviously missing data.

However, if you miss a field that expects an array your application will crash and you'll see this message in the browser's console:

`Cannot read properties of undefined (reading 'map')`

---

## Why does this error happen?

Imagine this circumstance in plain JS:

```js
const sampleObject = {
  anArray: [1, 2, 3],
  notAnArray: 42,
};

const mapped1 = sampleObject.anArray.map((e) => e + 1);
const mapped2 = sampleObject.notAnArray.map((e) => e + 1);
const mapped3 = sampleObject.reallyNotAnArray.map((e) => e + 1);
```

`mapped1` will get created without an issue.

When the code tries to evaluate the value of `mapped2` it will see that `sampleObject.notAnArray` is the number 42. Numbers don't have a `map` method, so it will throw an error.

Were the code to reach `mapped3`, `sampleObject.reallyNotAnArray` is `undefined`, which also doesn't have a `map` method, so it also throws an error.

---

## How to correct this error

One way to correct this is by controlling the default value of the incoming prop in `SkillsAndTraits.js`

```jsx
const SkillsAndTraits = ({ skillsAndTraits = [] }) => {
	...
```

Using this correction, if the `skillsAndTraits` prop would be `undefined`, it instead falls back to the default value of an empty array. Now the `map` method call doesn't throw an error, and the `SkillsAndTraits` component renders nothing in the DOM.

Very soon we will learn a way to account for this called **conditional rendering**. This will enable your components to be more flexible to potentially different data.

---

## endExperiment()

It's up to you whether or not you want to have every rendered user appear the same. In fact, if you like, you can add new fields of information. Just make sure it isn't crashing in the browser when you submit your work!

[Previous Exercise](./exercise-8.md)

[Back to the README.md](../README.md)

[Next Exercise](./exercise-10.md)
