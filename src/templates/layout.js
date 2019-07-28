import React from 'react';
import 'prismjs/themes/prism.css';

import userConfig from '../../config';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyle from '../global-styles';
import '../global-styles';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <Header config={userConfig} />
        {children}
        <Footer config={userConfig} />
      </div>
    );
  }
}

export default Template;
