// component/AddForm.js

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addTodo({
        id: Date.now(),
        title,
        body: content,
        isDone: false,
      }));
      setTitle("");
      setContent("");
    }
  };

  return (
    <StForm onSubmit={handleSubmit}>
      <StInput
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <StInput
        type="text"
        value={content}
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <StButton type="submit">Add</StButton>
    </StForm>
  );
};

export default AddForm;

const StForm = styled.form`
  display: flex;
  gap: 10px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
`;

const StInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const StButton = styled.button`
  padding: 10px 20px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005f5f;
  }
`;
