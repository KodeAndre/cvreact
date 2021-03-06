import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html{
        max-width: 100%;
        max-height: 100%;
        min-height: 100vh;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
        font-size: 16px;
        @media (max-width:769px) {
            font-size: 12px;
            overscroll-behavior-y: none;
        }
    }

    body{
        position: relative;
        max-width: 100%;
        max-height: 100%;
        min-height: 100vh;
        background-color: #202020;
        color: #fafafa;
        margin: 0;
        padding: 0 0 2.5rem 0;
        font-size: 16px;
    }

    /* Scrollbar css */

    ::-webkit-scrollbar {
    width: 6px;
    }

    ::-webkit-scrollbar-track {
    background-color: #12121200;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #fe9000;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #fe9000;
    }
`