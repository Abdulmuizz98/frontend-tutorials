import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import AddPosts from "./components/AddPosts";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Posts Manager</h1>
        </header>
        <AddPosts />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
