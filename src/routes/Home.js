import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store";
import ToDo from "../components/ToDo";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <h1>TO DO LIST</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default Home;
