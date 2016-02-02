/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

import Img from '../../components/Img/Img.react';
import Logo from '../../assets/logo.png';

import styles from './App.css';

const App = ({ children }) =>
  (
    <div className={styles.wrapper}>
      <Img className={styles.logo} src={Logo} alt="Max Stoiber - Logo"/>
      { children }
    </div>
  );

export default App;
