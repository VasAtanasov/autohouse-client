import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: #000;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    
    body {
        line-height: 1;
        min-height: 100vh;
    }

    ol, ul {
        list-style: none;
    }
    
    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body {
        font-family:  'Titillium Web', 'Helvetica', 'Arial', 'sans-serif', sans-serif;
        font-size: 14px;
        line-height: 1.4;
        font-weight: 400;
        background-color: #f4f4f4 !important;
        background-color: white !important;
        color: #333
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
        color: #000;
    }

    a:hover, a:focus {
        text-decoration: none;
        outline: none !important;
    }

    h1, h2, h3, h4, h5,
    .h1, .h2, .h3, .h4, .h5 {
        line-height: 1.4;
        font-weight: 400;
    }

    button {
        outline: none !important;;
    }
`;