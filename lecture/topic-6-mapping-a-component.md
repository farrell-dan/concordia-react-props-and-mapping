---
marp: true
---

# Mapping a Component
 
---

## How to think about react

- You don't want the return of your components to be hundred of lines

- Your JSX returns should be

- - easy to read

- - not cluttered with large amounts of logic / definitions

- - as small as possible

- Often, this means moving logic or handler functions up above the return and storing them in variaables

- It can also mean refactoring portions of your return into **their own components**

- When you build react applications, you're going to have to decide what is its own component

---

## What should be a component

- Any time you can re-use the same UI in multiple places, that should be a component

- - a styled input / button

- - a particular layout (ex: a certain grid)

- - stylized text (like a special `<span>`, a paragraph or header `<h#>`) 

---

## What should be a component

- Any time a large set of UI accomplishes one task, that should be a component

- - a store

- - a navigation menu

- - an article

- Even small things UI elements can be their own components if they contain a decent amount of HTML or logic

---

## Keep your returns clean

- Recall this solution

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

- How can we clean up `Store`'s return?

---

## Mapping a component && What accepts the key

```jsx

const StoreItem = ({name, price, id}) => {
	return (
		<li className="item" key={id}>
			<h3>{name}</h3>
			<p>Price: ${price}</p>
			<button>Add to cart</button>
		</li>
	)
}

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
					<StoreItem
						name={storeItem.name}
						price={storeItem.price}
						id={storeItem.id}
					/>
				)
			})
		}
		</ul>
	)
}
```

- The warning is still there

---

## What accepts the key

```jsx

const StoreItem = ({name, price}) => {
	return (
		<li className="item">
			<h3>{name}</h3>
			<p>Price: ${price}</p>
			<button>Add to cart</button>
		</li>
	)
}

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
					<StoreItem
						key={storeItem.id}
						name={storeItem.name}
						price={storeItem.price}
					/>
				)
			})
		}
		</ul>
	)
}
```

- The warning is gone

---

## What accepts the key

The execution of the component needs the key

```jsx
{array.map(element => <Component key={element.id}/>)}
```

You don't use the key in the mapped component's definition

In fact, you can't pass a prop called key...

---

## key is a special prop

```jsx
const Number = ({number, key}) => {
	console.log("the value of key is: ", key)
	return <p>{number}</p>
}

const Example = () => {
	return (
		<ul>
		{
			[1,2,3].map(number => {
				return (
					<Number
						key={number}
						number={number}
					/>
				)
			})
		}
		</ul>
	)
}
```

- Warning: Number: `key` is not a prop. 

---

## Special props

In js, there are reserved words

These words can't be used as variable names:

- const
- for
- try
- new

In react, there are special props

These words can't be passed as properties to components:

- key
- ref

There are only two.  We'll see `ref` much later

---

## Mapping conventions

- Whenever you map from an array, the callback should return/render a component

- This keeps your returns clean, and helps keep your code organized

- For naming conventions:

```jsx
{numbers.map(number => <Number number={number}/>)}
{users.map(user => <User user={user}/>)}
{messages.map(message => <Message message={message}/>)}

// this pseudo code excludes keys
```

- A list/array should be pluralized
- Each element is singular
- Each component is singular and PascalCased

---

## Exercise

Create and use a `<Pet>` component

```jsx
const pets = [
  {name: "Lassie", age: 19, species: "dog", breed: "Rough Collie"},
  {name: "Garfield", age: 45, species: "cat", breed: "Orange Persian Tabby"}
];

const ListOfPets = () => {
	return (
		<div>
			<h1 className="title">My pets:</h1>
			<ul>
				<li>
					<h3>{pets[0].name} - {pets[0].species}</h3>
					<p>A {pets[0].age} year old {pets[0].breed}</p>
				</li>
				<li>
					<h3>{pets[1].name} - {pets[1].species}</h3>
					<p>A {pets[1].age} year old {pets[1].breed}</p>
				</li>
			</ul>
		</div>
	)
}
```

becomes:

```jsx

const Pet = ({name, species, age, breed}) => {
	return (
		<li>
			<h3>{name} - {species}</h3>
			<p>A {age} year old {breed}</p>
		</li>
	)
}
const pets = [
  {name: "Lassie", age: 19, species: "dog", breed: "Rough Collie"},
  {name: "Garfield", age: 45, species: "cat", breed: "Orange Persian Tabby"}
];

const ListOfPets = () => {
	return (
		<div>
			<h1 className="title">My pets:</h1>
			<ul>
				{pets.map((pet, index) => {
					return <Pet key={index} name={pet.name} species={pet.species} age={pet.age} breed={pet.breed}/>
				})}
			</ul>
		</div>
	)
}
```

---

As a final note, remember that components should be their own files

```jsx
// Pet.js

const Pet = ({pet: {name, age, species, breed}}) => (
	<li>
		<h3>{name} - {species}</h3>
		<p>A {age} year old {breed}</p>
	</li>
)
export default Pet
```

Constants, like data arrays, can also be exported from files

```jsx
// pets.js
export default [
  {name: "Lassie", age: 19, species: "dog", breed: "Rough Collie"},
  {name: "Garfield", age: 45, species: "cat", breed: "Orange Persian Tabby"}
];
```

This helps keep parent components clean

```jsx
import Pet from "./Pet";
import pets from "./pets";

const ListOfPets = () => {
    return (
        <div>
            <h1 className="title">My pets:</h1>
            <ul>
                {pets.map(pet=><Pet pet={pet} key={pet.name}/>)}
            </ul>
        </div>
    )
}
export default ListOfPets

```

---

## End of today's topics