import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Geist Mono", "Courier New", Courier, monospace, sans-serif;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    min-height: 100vh;
    color: #333;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}

p {
    line-height: 1.5;
}
`;

export default GlobalStyle;
