import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  
  h1, h2, h3, h4, p, span, label {
    font-family: "Poppins";
  }

  /* Remove list styles on ul, ol elements with a list role, and dl, dd elements */
  ul[role='list'],
  ol[role='list'],
  dl,
  dd {
    list-style: none;
  }

  /* Reset form elements to make them styleable */
  button,
  input,
  select,
  textarea {
    appearance: none;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    outline: none;
    color: inherit;
    resize: none;
    vertical-align: middle;
  }

  /* Remove default button styles */
  button {
    cursor: pointer;
  }

  /* Reset anchor text decoration */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Reset heading elements */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  /* Reset paragraphs */
  p {
    line-height: 1.5;
  }

  /* Remove default styling for various elements */
  address,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  /* Reset blockquote styling */
  blockquote,
  q {
    quotes: none;
  }

  /* Reset table border collapse and spacing */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Reset image display */
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
