import { createGlobalStyle } from "styled-components";
import background from '../assets/images/background.png';
import background_mobile from '../assets/images/background_mobile.png';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0.125rem ${(props: any) => props.theme["gray-500"]};
  }

  body {
    /* background-image: url(${background});
    background-size: cover; */
    background-color:#f0f0f0 ;
    
    color: ${(props) => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
    
    position: relative;
    height: 100vh;
    width: 100vw;

    @media only screen and (max-width: 720px) {
      background-image: url(${background_mobile});
    }
  }

  body, input, textarea, button {
    font: 700 1.5rem Quicksand, sans-serif;
  }

  textarea:focus, input:focus, select:focus, button:focus {
    border-color: ${props => props.theme["green-700"]};
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  } 

  input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.8) brightness(50%) sepia(50%) saturate(10000%) hue-rotate(32deg);
  }
`;