import { useSelector } from "react-redux";
import Todo from "../Todo";
import style from "./style.module.css";
import { TodoInterface, TodoState } from "../../types/todo";
import { Store } from "@reduxjs/toolkit";

const TodoList = () => {
  const tasks = useSelector((state: TodoState) => {
    return state.todos.tasks;
  });
  console.log(tasks);

  return (
    <div className={style.container}>
      {
        tasks && tasks.map((task)=>{
          <Todo text={task.text} complete={task.complete} />
        })
      }
    </div>
  );
};

export default TodoList;
