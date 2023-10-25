import Users from "./Users";

const App = ({users}) => {
    return (
        <main>
            <h1>The users</h1>
            <ul>
                <Users users={users}/>
            </ul>
        </main>
    )
}

export default App;