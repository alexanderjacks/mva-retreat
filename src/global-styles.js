import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

  .cards-to-1-column-on-mobile {
    display: grid;
    grid-gap: 1rem;
    align-items: start;
    padding: 1rem 1rem 0rem 1rem;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(29vh, 1fr));
    background-color: #f15d4e;
  }

  .socialbtn {
    padding: 1.42rem;
    border: 0.52rem #f15d4e dashed;
  }

  .centermax {
    display: flex;
    text-align: center;
      -webkit-justify-content: center; /_ Safari _/
      justify-content:         center;
      -webkit-align-items: center; /_ Safari _/
      align-items:         center;
    margin: 0rem 0.4rem 0.6rem 0.4rem;
  }

  .white-bg {
    background-color: white;
  }

  .red-text {
    color: #f15d4e;
  }

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
    font-family: 'Nunito', 'Avenir', sans-serif; 
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
`;
export default GlobalStyle;
