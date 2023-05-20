import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
function CVForm() {
    return (
        <React.Fragment>
            <form>
                <Personal />
                <br />
                <br />
                <Education />
                <br />
                <br />
                <Experience />
            </form>
        </React.Fragment>
    );
}
export default CVForm;