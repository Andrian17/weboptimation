import routes from '../routes/routes.js';
import UrlParser from '../routes/url-parser.js';
import DrawerInitiator from '../utils/drawer-initiator.js';

class App {
  constructor({ button, drawer, content, body }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._body = body;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      body: this._body,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
