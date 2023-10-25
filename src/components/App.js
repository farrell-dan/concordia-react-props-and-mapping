const App = ({users}) => {
    return (
        <main>
            <h1>The users</h1>
            <ul>
                {users.map((user) => {
                    console.log(user);
                    return (
                        <li key={user.id}>
                            <h2>{user.name}</h2>
                            <p>age: {user.age}</p>
                            <p>A character from {user.fiction} - <a href={user.wiki} target="_blank">more info</a></p>
                        </li>


                    )
                })}
            </ul>
        </main>
    )
}

export default App;