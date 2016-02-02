/**
 *
 * app.js
 *
 * This is the entry file for the application, mostly just setup and boilerplate
 * code. Routes are configured at the end of this file!
 *
 */

// TODO: load serviceworker only in production
// the manifest.json file and the .htaccess file
//import 'file?name=[name].[ext]!./serviceworker.js';
//import 'file?name=[name].[ext]!./manifest.json';
//import 'file?name=[name].[ext]!./.htaccess';
//
//// // Check for ServiceWorker support before trying to install it
//if ('serviceWorker' in navigator) {
//  navigator.serviceWorker.register('/serviceworker.js').then(() => {
//  // Registration was successful
//
//  }).catch(() => {
//  // Registration failed
//
//  });
//} else {
//  // No ServiceWorker Support
//}

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import FontFaceObserver from 'fontfaceobserver';
import createHistory from 'history/lib/createBrowserHistory';

// Observer loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add the js-open-sans-loaded class to the body
openSansObserver.check().then(() => {
  document.body.classList.add('js-open-sans-loaded');
}, () => {
  document.body.classList.remove('js-open-sans-loaded');
});

// Import the pages
import HomePage from './containers/HomePage/HomePage.react';
import ReadmePage from './containers/ReadmePage/ReadmePage.react';
import NotFoundPage from './containers/NotFoundPage/NotFound.react';
import App from './containers/App/App.react';

// Import the CSS file, which HtmlWebpackPlugin transfers to the build folder
import '../node_modules/sanitize.css/dist/sanitize.min.css';

// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
ReactDOM.render(
  <Router history={createHistory()}>
    <Route component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/readme" component={ReadmePage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
