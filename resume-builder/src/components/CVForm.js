import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import styled from 'styled-components';
function CVForm() {
    return (
        <Wrapper>
            <Personal />
            <br />
            <br />
            <Education />
            <br />
            <br />
            <Experience />
        </Wrapper>
    );
}
const Wrapper = styled.div``;
export default CVForm;