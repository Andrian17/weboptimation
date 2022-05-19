const DrawerInitiator = {
  init({ button, drawer, body }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    body.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },
  // event
  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    button.classList.toggle('click-menu');
  },
  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.remove('open');
    button.classList.remove('click-menu');
  },
};

export default DrawerInitiator;
