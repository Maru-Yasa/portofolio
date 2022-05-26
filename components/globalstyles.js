import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.color};
        transition: all 0.50s linear;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    .bg-orange{
        background-color: #FF7700 !important;
    }

    .text-orange{
        color: #FF7700 !important;
    }

`