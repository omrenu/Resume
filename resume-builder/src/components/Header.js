import React from 'react';
import styled from 'styled-components';
import { FaBriefcase } from "react-icons/fa";

function Header() {
    return (
        <StyledHeader>
            <Logo>
                <FaBriefcase />
            </Logo>
            <Title> CV Creator </Title>
        </StyledHeader>
    )
}
const StyledHeader = styled.header`
 display:flex;
 align-items:center;
 padding: 2rem;
 background-color:${({ theme }) => theme.colors.dark};
 color: ${({ theme }) => theme.colors.light};
`;
const Logo = styled.div`
  display:flex;
  font-size: 4rem;
  margin-right: 2rem;
`;
const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
`;


export default Header;