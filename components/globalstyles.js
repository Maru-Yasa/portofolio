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
/* 
    .my-bg {
        transition: all 0.9s linear;
    } */

    a {
        color: inherit;
        text-decoration: none !important;
    }

    .form-control{
        color: ${({theme}) => theme.text};
        background-color: ${({theme}) => theme.background};
        border-color: ${({theme}) => theme.body};
        border-width: 2px;
        border-radius: 10px;
    }

    .form-control:focus{
        color: ${({theme}) => theme.text};
        background-color: ${({theme}) => theme.body};
        border-color: ${({theme}) => theme.body};
    }

    .btn-orange{
        background-color: #FF7700;
        border-color: #FF7700;
        color: white;
        border-radius: 10px;
    }

    a:hover{
        color: #FF7700 !important;
    }

    .btn-orange:hover{
        background-color: #FF7700;
        border-color: #FF7700;
        color: white;
    }

    .btn-orange:focus{
        background-color: #FF7700;
        border-color: #FF7700;
        color: white;
    }

    .nav-link {
        color : ${({theme}) => theme.text};
    }

    .nav-link:focus {
        color : #FF7700;
    }

    .nav-link:hover {
        color : #FF7700;
    }

    .my-rounded{
        border-radius: 20px !important;
    }

    .dropdown-toggle:focus{
        color : #FF7700 !important;
    }

    .dropdown-menu{
        background-color: ${({theme}) => theme.background};
        color: #FF7700;
    }

    .dropdown-item{
        color: #FF7700;
    }

    .dropdown-item:hover{
        color: white !important;
        background-color: #FF7700;
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
        object-fit: fill;
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