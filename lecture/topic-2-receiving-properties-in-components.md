---
marp: true
---

# Receiving Props in Components
 
---

## Parameters

- Functions accept arguments in their parameter list

- Parameters are listed at the beginning of a function's definition

```js
const functionName = (parameter1, parameter2) => {
	// do some stuff, likely return something
}

function anotherFunctionName (parameter1, parameter2) {
	// do some stuff, likely return something
}
```

- Components are the same

---

## Recall Passing arguments to a component

```jsx
// in file App.js
import CoolButton from "./CoolButton";

const App = () => {
	return (
		<div>
		<p>Click the button!</p>
		<CoolButton
			content="Groovy"
			handleClickFunction={ ()=>{ console.log("You clicked that button good!") } }
			color="blue"
			/>
		</div>
	)
}
```

- It is as if we executed it like so:

```js
CoolButton(
	{
		content: "Groovy",
		handleClickFunction: ()=>{ console.log("You clicked that button good!") },
		color: "blue"
	}
)
```

- All the properties are assembled into an object

- That **props** object is the first argument passed to the function

---

## Receiving Props in Components examples

```jsx
// in file App.js

import RedText from "./RedText";

const App = () => {
	return (
		<div>
			<p>Below is some red text</p>
			<RedText
				message="I am red!"
			/>
		</div>
	)
}


// in file RedText.js

const RedText = (props) => {
	console.log("The props contains: ", props)
	console.log("The value of props.message is: ", props.message)

	return (
		<p style={{color:"red"}}>
			{props.message}
		</p>
	)
}

```

---

## Receiving Props in Components examples

```jsx
// in file App.js

import CoolButton from "./CoolButton";

const App = () => {
	return (
		<div>
			<p>Click the button!</p>
			<CoolButton
				content="Groovy"
				handleClickFunction={ ()=>{ console.log("You clicked that button good!") } }
				color="blue"
			/>
		</div>
	)
}

// in file CoolButton.js

const CoolButton = (props) => {

	return (
		<button onClick = {props.handleClickFunction} style={{color: props.color}}>
			{props.content}
		</button>
	)
}
```

---

## Destructuring

- It gets tedious to write `props.` all over the place

- Destructuring the props object is ideal...

```jsx
// not quite destructuring
const CoolButton = (props) => {

	const content = props.content;
	const handleClickFunction = props.handleClickFunction;
	const color = props.color

	return (
		<button onClick={handleClickFunction} style={{color: color}}>
			{content}
		</button>
	)
}
```

- or better:

```jsx
const CoolButton = (props) => {

	const { content, handleClickFunction, color } = props;

	return (
		<button onClick={handleClickFunction} style={{color: color}}>
			{content}
		</button>
	)
}
```

- or best:

```jsx
const CoolButton = ( { content, handleClickFunction, color } ) => {

	return (
		<button onClick={handleClickFunction} style={{color}}>
			{content}
		</button>
	)
}
```

- Just like an object, we make up the keys

- We just have to make sure the keys match in the definition and where we execution the function

---

## The power of props

- Props are arguments (nested in an object)

- This allows a single component definition to render different UI

---

Here's part of the Spotify desktop app:

![spotifyArtists](./assets/spotify-artists.png)

Imagine a component for each artist

What props would `<RecommendedArtist  ??? />` need?

---

## Calling the same component multiple times

In React, it would look like this:

```jsx
import RecommendedArtist from "./RecommendedArtist";

const App = () => {

  return (
	<div className="artist-container">
    	<RecommendedArtist
    	  imageUrl="./skrillex.jpg"
    	  artistName="Skrillex"
    	  numOfSongs={9}
    	/>

    	<RecommendedArtist
    	  imageUrl="./helmet-thing.jpg"
    	  artistName="Disciple Round Table"
    	  numOfSongs={1}
    	/>

    	<RecommendedArtist
    	  imageUrl="./geoxor.jpg"
    	  artistName="Geoxor"
    	  numOfSongs={1}
    	/>

    	<RecommendedArtist
    	  imageUrl="./misfit.jpg"
    	  artistName="Misfit Massacre"
    	  numOfSongs={1}
    	/>
	</div>	
  )
}
```

- We render the `RecommendedArtist` component 4 times

- Each time it receives different information in its **props**

---

## Completing the picture

Here is one of the `<RecommendedArtist>` calls:

```jsx
<RecommendedArtist
	imageUrl="./misfit.jpg"
	artistName="Misfit Massacre"
	numOfSongs={1}
/>
```
Here is what the component definition may look like:

```jsx
const RecommendedArtist = ({imageUrl, artistName, numOfSongs}) => {
	const songLabel = numOfSongs > 1 ? "SONGS" : "SONG";
	
	return (
		<div className="recommended-artist">
			<img src={imageUrl} alt={`image of ${artistName}`} />
			<h3>{artistName}</h3>
			<p>{numOfSongs} {songLabel}</p>
		</div>
	);
};
```

- Make sure you match your prop names both where you pass props and receive them

- Otherwise your variable will hold `undefined` (a common mistake)

---

## Props exercises

Make this component dynamic by using props

```jsx
const StaticVideoPlayer = () => {
  return (
    <div>
      <video src="http://youtube.com/some-video" width={480} height={300} />
      <p>Cat playing the piano!!</p>
    </div>
  );
}

// solution:

const DynamicVideoPlayer = (props) => {
  return (
    <div>
      <video src={props.source} width={props.width} height={props.height} />
      <p>{props.description}</p>
    </div>
  );
}

```

---

## Props exercises

Pass props down the to the component

```jsx
<Profile />

// solution:
<Profile
	userName="Big Purple Bear"
	name="Tammy"
	address="123 Not Telling You"
	email="tammy_tampster@gmail.com"
/>

const Profile = (props) => {
  return (
    <div>
      <h1>Welcome {props.userName} to your profile!</h1>
      <h3>Your info:</h3>
      <ul>
        <li>Name: {props.name}</li>
        <li>Address: {props.address}</li>
        <li>Email: {props.email}</li>
      </ul>      
    </div>
  );
}
```

---

## Next step

- What happens if we want to render a component 100 times?

- What if we want to render it a variable number of times?

---

Before we answer that question, we need to understand what JSX does when it encounters different js values 

[topic-3-making-nodes-in-jsx](./topic-3-making-nodes-in-jsx.md)
