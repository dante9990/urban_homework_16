import { ChangeEvent, FormEvent, useState } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../slice/todoSlice";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(text.trim()) {
      dispatch(addTodo(text))
      setText("");
    }
    
  };

  return (
    <form
      className={style.container}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Введите название"
        className={style.input}
        value={text}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button type="submit" className={style.btn}>
        Добавить
      </button>
    </form>
  );
};

export default AddTodo;
