// App.js

import React from "react";
import styled from "styled-components";
import AddForm from "./component/AddForm";
import TodoListContainer from "./component/TodoListContainer";

const App = () => {
  return (
      <StContainer>
        <AddForm />
        <TodoListContainer />
      </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
