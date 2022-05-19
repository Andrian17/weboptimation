import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/respon.css';
import '../styles/detail.css';
import '../styles/like.css';

import App from './views/app.js';
// Service Worker
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('main'),
  body: document.querySelector('body'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
