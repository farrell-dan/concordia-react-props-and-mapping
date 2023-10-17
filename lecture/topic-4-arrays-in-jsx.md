---
marp: true
---

# Arrays in JSX
 
---

## Game: What does it make?

### arrays

```jsx
const Constant = () => {
	return <p>What will Test render?</p>
}

const Test = () => {
	return <p> I produce: { [ 0, 1, "Hello World", 3, 4, false, 5, "", 7 ] } </p>
}
```

- A series of Text Nodes

- `false` and `""` do not produce Text Nodes

---

## Arrays in JSX

- An array in jsx is spread

- Each element is treated like its own expression slot

- So each element renders as a Text Node depending on its value

---

## Game: What does it make?

### arrays in arrays

```jsx
const Constant = () => {
	return <p>What will Test render?</p>
}

const Test = () => {
	return <p> I produce: { [ 0, 1, [ "zero", "one", "two", "three"], 2 ] } </p>
}
```

- If an array contains an array in JSX, the process continues

---

## Game: What does it make?

### HTML elements as elements of an array?

```jsx
const Constant = () => {
	return <p>What will Test render?</p>
}

const Test = () => {
	return (
		<p> 
			I produce: { [ 
				<span>What </span>,
				<span>is </span>,
				<span>going </span>,
				<span>on?</span>
			]}
		</p>
	)
}
```

---

- If the element in an array is an HTML element, JSX will create that element in the DOM

- So technically, each expression slot procudes a Node

- This is extremely useful!

- Remember the reason we're going down this rabbit hole...

- We want to know how we can render an unknown number of components from a set of data.

---

## The problem we face

Say we have some data:

```js
const storeItems = [
  { id: "a", price: 19.99, name: "Monocle" },
  { id: "b", price: 209.99, name: "Cane" },
  { id: "c", price: 44.99, name: "Top Hat" },
];
```

And we want to turn it into this HTML:

```html
<ul>
  <li class="item">
    <h3>Monocle</h3>
    <p>Price: $19.99</p>
    <button>Add to cart</button>
  </li>

  <li class="item">
    <h3>Cane</h3>
    <p>Price: $209.99</p>
    <button>Add to cart</button>
  </li>

  <li class="item">
    <h3>Top Hat</h3>
    <p>Price: $44.99</p>
    <button>Add to cart</button>
  </li>
</ul>
```

Every element of our data needs representation in the DOM

We need to go from a js array of objects -

to an array whose elements are HTML elements

What array method produces a new array of equal length?

---

[topic-5-mapping-from-an-array](./topic-5-mapping-from-an-array.md)