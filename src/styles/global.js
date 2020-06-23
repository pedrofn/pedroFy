import { createGlobalStyles } from 'styled-componenets'

export default createGlobalStyles`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
}

body {
    font: 14px 'Roboto',sans-serif;
    background: #black;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
}

ul {
    list-style: none;
}
`;

