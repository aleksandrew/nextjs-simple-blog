// \pages/_app.js
import React from 'react';
// @ts-ignore
import Layout from '../src/components/Layout';
import { useStore } from '../src/store';
import { Provider } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 15px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  a:hover {
    -webkit-tap-highlight-color: transparent;
  }
  p, h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;  
  }
  h1, h2, h3, h4, h5, h6 {
    text-transform: capitalize;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  section, header, footer {
  padding: 0 15px;
}

  @media (min-width: 575.98px){
    section, header, footer {
      padding: 0 calc(50vw - 270px);
  }
}

  @media (min-width: 767.98px){
    section, header, footer {
      padding: 0 calc(50vw - 360px);
  }
}

  @media (min-width: 991.98px) {
    section, header, footer {
      padding: 0 calc(50vw - 480px);
  }
}

  @media (min-width: 1199.98px){
    section, header, footer {
      padding: 0 calc(50vw - 590px);
  }
}
`;

export default function App({ Component, pageProps }: any) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
            <GlobalStyle/>
        </Provider>
    );
}
