/*
 * HomePage
 * This is the first thing users see of our App
 */
import React from 'react';
import { connect } from '../../connect';

import { dispatchChangeProjectName, dispatchChangeOwnerName } from './HomePage.actions';
import store from '../../store';

import Button from '../../components/Button/Button.react';
import styles from './HomePage.css';

const HomePage = ({ projectName, ownerName }) =>
  (
    <div>
      <h1>Hello World!</h1>
      <h2>This is the demo for the { projectName } by
        <a href={`https://twitter.com/${ownerName}`}className={styles.link} >@{ ownerName }</a>
      </h2>
      <label className={styles.label}>Change to your project name:
        <input className={styles.input} type="text"
               defaultValue="React.js Boilerplate" value={projectName}
               onChange={ e => dispatchChangeProjectName(e.target.value) }
        />
      </label>
      <label className={styles.label}>Change to your name:
        <input className={styles.input} type="text"
               defaultValue="mxstbr" value={ownerName}
               onChange={ e => dispatchChangeOwnerName(e.target.value) }
        />
      </label>
      <Button route="/readme">Setup</Button>
    </div>
  );

// Which props do we want to inject, given the global state?
const select = state => state.data || {};

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage, store);
