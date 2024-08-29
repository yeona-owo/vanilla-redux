import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === parseInt(id))
  );

  if (!todo) {
    return <h1>Todo not found</h1>;
  }

  return (
    <div>
      <h1>{todo.text}</h1>
      <h5>Created at: {new Date(todo.id).toLocaleString()}</h5>
    </div>
  );
};

export default Detail;
