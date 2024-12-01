import { FC } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoStatus } from "../../slice/todoSlice";

type Props = {
  id: number;
  text: string;
  complete: boolean;
};

const Todo: FC<Props> = ({ id, text, complete }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div className={`${style.check} ${complete ? style.cheked : ""}`} onClick={()=>{dispatch(toggleTodoStatus(id))}}></div>
      <span className={style.text}>{text}</span>
      <button
        className={style.btn}
        onClick={() => {
          dispatch(removeTodo(id));
        }}
      >
        Удалить
      </button>
    </div>
  );
};

export default Todo;
