import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  * {
    padding: 0 0 0 0;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    background: #f9fafc;
    font-family: 'Avenir', sans-serif; 
    line-height: 1.5;
    padding: 0 0 0 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
  }

  .gatsby-highlight {
    border-bottom: 1px solid #e0e6ed;
    border-top: 1px solid #e0e6ed;
    margin: 15px -100px;
    padding: 0;

    pre[class*="language-"] {
      margin: 0;
      padding: 25px 100px;
    }
  }

  a {
    text-decoration: none;
    color: #04476d;
  }

  pre[class*="language-"] {
    background: rgba(245, 245, 245, 1);
    color: rgb(65, 76, 94);  }

  @media only screen and (max-width: 870px) {
    .gatsby-highlight {
      margin: 0px 0px;

      pre[class*="language-"] {
        padding: 0px;
      }
    }
  }


  .cards-to-1-column-on-mobile {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 2fr));
    grid-gap: 30px;
  }
  .welcome-paragraphs {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;

    justify-content: center;
    -webkit-justify-content: center;
    
    align-items:         flex-start;
    -webkit-align-items: flex-start; /_ Safari _/
    
    margin: 0 0 0 0;
    padding: 15vh 10vw 15vh 10vw;
  }
  .welcome-paragraphs P {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .centermax {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content:         center;
      -webkit-justify-content: center; /_ Safari _/
    align-items:         center;
      -webkit-align-items: center; /_ Safari _/
    margin: 0 0 0 0;
    align-content: center;
  }
  .white-bg { background-color: white; }
  .blue2-bg { background-color: #1A486D; }
  
  .white-text { color: white; }
  .red-text { color: #ED7D4E; }

  .keep-50w { max-width: 50vw; }

  .top-clearance-xl { padding-top: 8.5vh; }
  .top-clearance { padding-top: 5vh; }
  .bottom-clearance { padding-bottom: 5vh; }

`;
export default GlobalStyle;
