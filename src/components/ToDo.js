import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store";
import { Link } from "react-router-dom";
import "./ToDo.css";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
      <Link to={`/detail/${id}`}>{text}</Link>
      <button onClick={onDelete}>DEL</button>
    </li>
  );
};

export default ToDo;
