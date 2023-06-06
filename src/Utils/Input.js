import React from 'react';
import styled from 'styled-components';
const Input = ({ type, name, placeholder }) => {
    return (
        <InputWrapper type={type} name={name} placeholder={placeholder}>

        </InputWrapper>
    );
};

const InputWrapper = styled.input`
padding: 0.5rem;
border-radius: 5px;
border: 1px solid transparent;

&:focus{
    border: 1px solid black;
}`;

export default Input;
