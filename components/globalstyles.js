import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text} ;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
        transition: all 0.7s linear;
    }

    .my-bg{
        background-color: ${({theme}) => theme.background};
    }

    .bg-orange{
        background-color: #FF7700;
    }

    .text-orange{
        color: #FF7700;
    }

    .text-navy{
        color: #251D3A;
    }

    .text-white {
        color: ${({theme}) => theme.text} ;
    }

    .my-text {
        color: ${({theme}) => theme.text};
    }

    .poster{
        position: relative;
        text-align: center;
        filter: brightness(60%);
    }

    .title {
        position: absolute;
        bottom: 58px;
        left: 16px;
    }

    .desc {
        position: absolute;
        bottom: 8px;
        left: 16px; 
    }

    .card-hover:hover {
        transform: scale(1.3);
        transition-timing-function: ease-in;
        transition: 0.4s;
    }

    .project-hover:hover {
        transform: scale(1.1);
        transition-timing-function: ease-in;
        transition: 0.4s;
    }

`