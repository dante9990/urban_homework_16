import { useSelector } from "react-redux";
import Todo from "../Todo";
import style from "./style.module.css";
import { TodoState } from "../../types/todo";

const TodoList = () => {
  const tasks = useSelector((state: { todos: TodoState }) => {
    if (state.todos.filter === "complete") {
      return state.todos.tasks.filter((task) => !task.complete);
    } else if (state.todos.filter === "incomplete") {
      return state.todos.tasks.filter((task) => task.complete);
    }
    return state.todos.tasks;
  });

  return (
    <div className={style.container}>
      {tasks &&
        tasks.map((task) => {
          return (
            <Todo
              key={task.id}
              id={task.id}
              text={task.text}
              complete={task.complete}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
