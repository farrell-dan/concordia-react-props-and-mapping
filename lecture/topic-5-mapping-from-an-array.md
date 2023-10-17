---
marp: true
---

# Mapping from an Array in JSX
 
---

## The thought process

- We can use the `map` method in a JSX expression slot

- This will produce an array

- Each element in that new array is the return of the `map`'s callback function

- The callback function must return some HTML...

---

## The transition

HTML:
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

react without map:
```jsx
const Store = () => {
	return (
		<ul>
			{ [
				{
					<li className="item">
						<h3>Monocle</h3>
						<p>Price: $19.99</p>
						<button>Add to cart</button>
					</li>
				},
				{
					<li className="item">
						<h3>Cane</h3>
						<p>Price: $209.99</p>
						<button>Add to cart</button>
					</li>
				},
				{
					<li className="item">
						<h3>Top Hat</h3>
						<p>Price: $44.99</p>
						<button>Add to cart</button>
					</li>
				}
			] }
		</ul>
	)
}
```

react with map:
```jsx
// data is representing in an array
// each element is an object
// each objects holds the different information

const storeItems = [
  { id: "a", price: 19.99, name: "Monocle" },
  { id: "b", price: 209.99, name: "Cane" },
  { id: "c", price: 44.99, name: "Top Hat" },
];

const Store = () => {
	return (
		<ul>
		{
			storeItems.map(storeItem => {
				return (
					<li className="item">
						<h3>{storeItem.name}</h3>
						<p>Price: ${storeItem.price}</p>
						<button>Add to cart</button>
					</li>
				)
			})
		}
		</ul>
	)
}
```

- mapping from an array uses fewer lines of code

- it scales very well!

- it also solves the original problem: how can we render an unknown number of times from a set of data.

---

## Almost the right solution

```jsx
const storeItems = [
  { id: "a", price: 19.99, name: "Monocle" },
  { id: "b", price: 209.99, name: "Cane" },
  { id: "c", price: 44.99, name: "Top Hat" },
];

const Store = () => {
	return (
		<ul>
		{
			storeItems.map(storeItem => {
				return (
					<li className="item">
						<h3>{storeItem.name}</h3>
						<p>Price: ${storeItem.price}</p>
						<button>Add to cart</button>
					</li>
				)
			})
		}
		</ul>
	)
}
```

- Might want to check the console

- Includes a warning: see below

---

## A new warning

`Warning: Each child in a list should have a unique "key" prop.`

- This raises some questions:

- 1. Why is it happening?  Is it because of map?

- 2. What does this mean?

- 3. How can we fix it?

---

## 1. Is map the culprit?

```jsx
const Test = () => {
	return [ <span> Hello </span> , <span> World </span> ]
}
render(<Test/>)
```

- Checking the console...

- The warning is still there

---

## 2. What does it mean?

- In the future, you will be mapping from arrays that change

- When an array's content changes, react's DOM management wants to know which of the mapped elements it needs to update

- The `key` prop is a special attribute that react expects to it can optimize its next render

- In truth, a deep understanding of the `key` prop requires more "under the hood" knowledge

- Fortunately, correcting it is simple

---

## 3. How can we fix it?

To fix this issue, we follow the instruction in the warning:

`Warning: Each child in a list should have a unique "key" prop.`

```jsx
const storeItems = [
  { id: "a", price: 19.99, name: "Monocle" },
  { id: "b", price: 209.99, name: "Cane" },
  { id: "c", price: 44.99, name: "Top Hat" },
];

const Store = () => {
	return (
		<ul>
		{
			storeItems.map(storeItem => {
				return (
					<li className="item" key={storeItem.id}>
						<h3>{storeItem.name}</h3>
						<p>Price: ${storeItem.price}</p>
						<button>Add to cart</button>
					</li>
				)
			})
		}
		</ul>
	)
}
```

- Only each child in the list needs key

- Not the grandchildren, nor great-grandchildren, etc

- In this case, that means the `<li>` element that wraps the return

---

## What value to provide to the key prop

- In the previous example, we were fortunate that each element in our array had a unique id

- Every `key` needs to be unique!

- Use a unique field in the objects

- If there isn't one, for now, use `index`

```jsx
const arrayToMap = [ "Nope" , "Nope" ];

const Test = () => {
	return (
		<ul>
		{
			arrayToMap.map((word, index) => {
				return <li key={index}>{word}</li>
			})
		}
		</ul>
	)
}
```

- Disclaimer: using `index` is frowned upon

- We will return to this topic at the next catch up day for a better solution

---

The next topic will be covered at the check in

[topic-6-mapping-a-component](./topic-6-mapping-a-component.md)