import "./App.css";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <h1>To-do</h1>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
