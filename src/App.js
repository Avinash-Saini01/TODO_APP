import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddForm from './component/AddForm';
import TodoListContainer from './component/TodoListContainer';
import TodoDetails from './component/TodoDetails';

const App = () => {
  return (
      <Router>
        <StContainer>
          <Routes>
            <Route exact path="/" element={
              <>
                <AddForm />
                <TodoListContainer />
              </>
            } />
            <Route path="/details/:id" element={<TodoDetails />} />
          </Routes>
        </StContainer>
      </Router>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
