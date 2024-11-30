import { FC } from "react";
import style from "./style.module.css";

type Props = {
  text: string;
  complete: boolean;
};

const Todo: FC<Props> = ({ text }) => {
  return (
    <div className={style.container}>
      <div className={style.check}></div>
      <span className={style.text}>{text}</span>
      <button className={style.btn}>Удалить</button>
    </div>
  );
};

export default Todo;
