import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  line-height: 1.6;
}

body {
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  background-color: var(--main-light);
  color: var(--main-dark);
}

header {
  font-family: "Montserrat", sans-serif;
  font-size: 2.4rem;
  background-color: var(--main-dark);
  color: var(--main-light);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2;
}

a {
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
}

button,
input {
  outline: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
}

button {
  cursor: pointer;
}
`;
export default GlobalStyle;