import { createGlobalStyle } from "styled-components"

export const Colors = {
    background: "#090909",
    text: "#fff",
    activeButton: "#fff",
    noActiveButton: "#38444b"
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: ${Colors.background};
        font-family: 'Roboto';

        // display: flex;
        // justify-content: center;

    }
`;

import "react-multi-carousel/lib/styles.css";