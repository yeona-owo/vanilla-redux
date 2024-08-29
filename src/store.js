import { createStore } from "redux";

// 액션 타입
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 액션 생
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// 초기 상태
const initialState = {
  todos: [],
};

// 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.text }],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
