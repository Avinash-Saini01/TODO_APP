// component/TodoItem.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  const navigate = useNavigate();

  return (
    <StTodoItem completed={todo.isDone}>
      <DetailsButton onClick={() => navigate(`/details/${todo.id}`)}>Details</DetailsButton>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <StButtonGroup>
        <StButton onClick={() => deleteTodo(todo.id)} delete>
          Delete
        </StButton>
        <StButton onClick={() => toggleComplete(todo.id)} complete={todo.isDone}>
          {todo.isDone ? 'Cancel' : 'Done'}
        </StButton>
      </StButtonGroup>
    </StTodoItem>
  );
};

export default TodoItem;

const StTodoItem = styled.div`
  border: 2px solid ${(props) => (props.completed ? '#d4edda' : '#c3e6cb')};
  padding: 20px;
  border-radius: 8px;
  background-color: ${(props) => (props.completed ? '#d4edda' : '#fff')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const StButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.delete ? '#f5c6cb' : props.complete ? '#ffc107' : '#c3e6cb'};
  color: ${(props) =>
    props.delete ? '#721c24' : props.complete ? '#856404' : '#155724'};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.delete ? '#f1b0b7' : props.complete ? '#e0a800' : '#b1dfbb'};
  }
`;

const DetailsButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5a6268;
  }
`;
