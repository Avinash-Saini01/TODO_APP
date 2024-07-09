// component/TodoListContainer.js

import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteTodo, toggleComplete } from "../redux/modules/todos";

const TodoListContainer = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Working.. 🔥</h2>
      <TodoList>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={(id) => dispatch(deleteTodo(id))}
              toggleComplete={(id) => dispatch(toggleComplete(id))}
            />
          ))}
      </TodoList>

      <h2>Done..! 🎉</h2>
      <TodoList>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={(id) => dispatch(deleteTodo(id))}
              toggleComplete={(id) => dispatch(toggleComplete(id))}
            />
          ))}
      </TodoList>
    </div>
  );
};

export default TodoListContainer;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
