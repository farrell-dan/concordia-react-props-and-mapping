import ReactDOM from "react-dom/client";
import MyFirstDynamicComponent from "./components/MyFirstDynamicComponent";
import App from "./components/App";
import users from "./data/users"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <MyFirstDynamicComponent message="Hello World" />
    <MyFirstDynamicComponent message="My name is Daniel" />
    <MyFirstDynamicComponent message="What is your name" />
    <MyFirstDynamicComponent message="Goodbye" />
    <App users = {users} />
  </div>
);