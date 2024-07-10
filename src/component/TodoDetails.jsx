// component/TodoDetails.js

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TodoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todos.todos.find((todo) => todo.id === parseInt(id)));

  return (
    <DetailsContainer>
      <h2>Todo Details</h2>
      {todo ? (
        <>
          <Detail><strong>ID:</strong> {todo.id}</Detail>
          <Detail><strong>Title:</strong> {todo.title}</Detail>
          <Detail><strong>Content:</strong> {todo.body}</Detail>
          <BackButton onClick={() => navigate('/')}>Back</BackButton>
        </>
      ) : (
        <p>Todo not found</p>
      )}
    </DetailsContainer>
  );
};

export default TodoDetails;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
  margin-top: 20px;
`;

const Detail = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #005f5f;
  }
`;
