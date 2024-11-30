import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { TodoState } from "../../types/todo";
import { setFilter } from "../../slice/todoSlice";

const Filter = () => {
  const currentFilter = useSelector(
    (state: { todos: TodoState }) => state.todos.filter
  );

  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <button
        onClick={() => {
          dispatch(setFilter("all"));
        }}
        disabled={currentFilter === "all"}
      >
        Все
      </button>
      <button
        onClick={() => {
          dispatch(setFilter("complete"));
        }}
        disabled={currentFilter === "complete"}
      >
        Выполненные
      </button>
      <button
        onClick={() => {
          dispatch(setFilter("incomplete"));
        }}
        disabled={currentFilter === "incomplete"}
      >
        Невыполненные
      </button>
    </div>
  );
};

export default Filter;
