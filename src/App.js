import React, { Fragment, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from './containers/Layout';
import Sidebar from './containers/Sidebar';
import './assets/fonts/fonts.css';

function App() {
  const [sidebarIsOpen, sidebarToggle] = useState(true);

  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <AppWrapper>
          <aside className="sidebar"><Sidebar sidebarIsOpen={sidebarIsOpen} sidebarToggle={sidebarToggle}/></aside>
          <main className="layout"><Layout/></main>
        </AppWrapper>
      </Provider>
    </Fragment>
  );
}

const AppWrapper = styled.div`
  display: flex;
  .layout {

  }
  .sidebar {
    width: 350px;
    flex-shrink: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
 * {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }
  body {
    background-color: #f2f2f2;
    font-family: 'Proxima Nova Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default App;