import React from "react";
import CVForm from "./CVForm/CVForm";
import styled from 'styled-components';
import CVResult from "./CVResult";
const Main = () => {
  return (
    <MainWrapper>
      <CVForm />
      <CVResult />
      <Button>Generate PDF</Button>
    </MainWrapper>
  );
};
const MainWrapper = styled.main`
  padding:2rem;
`;
const Button = styled.button`
  margin:1rem;
`;

export default Main;
