import React from "react";

import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import styled from "styled-components";


const CVForm = () => {
  return (
    <CVFormWrapper>
      <Personal />
      <Education />
      <Experience />
    </CVFormWrapper>
  );
};
const CVFormWrapper = styled.div`
  max-width:800px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light}
`;

export default CVForm;
