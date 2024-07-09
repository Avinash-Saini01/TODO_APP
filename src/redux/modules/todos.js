// redux/modules/todos.js

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

export const toggleComplete = (id) => {
  return { type: TOGGLE_COMPLETE, id };
};

const initialState = {
  todos: [
    {
      id: 1,
      title: "View React Lectures",
      body: "Learn from Chapter 1 to Chapter 12",
      isDone: false,
    },
    {
      id: 2,
      title: "Eat lunch",
      body: "What's for lunch...?",
      isDone: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
};

export default todos;
