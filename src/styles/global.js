import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #fff;
    font-family: 'Roboto', sans-serif;

    div.react-confirm-alert-body {
      width: 570px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .react-confirm-alert-button-group button {
        &:hover {
          opacity: .7;
        }
        &:first-child {
          background: #4BB543;
        }
        &:last-child {
          background: #cc0000;
        }
      }
    }
  }
`;

export default GlobalStyle;
