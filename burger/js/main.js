var r_burgerMenuGlobal = {
  init: function () {

    this.config ={
      CSS:{
        classes:{
          opened:'opened',
          active: 'active',
          btOverlay: 'bt-overlay',
        },
        ids:{
          container:'maincontainer'
        }
      },
      _buttonBurgerMenu: '.r_navigation__title--burger',
      _contentMenu: '.r_main-navigation',
      _contentMenuCloned: '.r_cloned-navigation',
    };

    this.overlay();
    this.cloneMenu();
    this.openMenu();
    this.closeMenu();
    this.debug();
  },

  debug: function () {
    console.log('Hello !');
  },

  closeMenu: function (e) {
    window.addEventListener('click', removeMenu);

    function removeMenu (e) {
      if (!document.getElementById('cloned-menu').contains(e.target)){
        alert('oui');
        document.querySelector(r_burgerMenuGlobal.config._contentMenuCloned).classList.remove(r_burgerMenuGlobal.config.CSS.classes.opened);
        document.body.classList.remove(r_burgerMenuGlobal.config.CSS.classes.opened);
      }
    }
  },

  overlay: function() {
    var overlay = document.createElement('div');
    overlay.className = r_burgerMenuGlobal.config.CSS.classes.btOverlay;
    document.body.appendChild( overlay );
  },

  openMenu: function () {
    [].forEach.call(document.querySelectorAll(this.config._buttonBurgerMenu), function(el) {
      el.addEventListener('click', clickOpenMenu);
    });

    function clickOpenMenu (e) {
      e.stopPropagation();
      e.preventDefault();

      if ( document.querySelector(r_burgerMenuGlobal.config._contentMenuCloned).classList.contains(r_burgerMenuGlobal.config.CSS.classes.opened) ) {
        [].map.call(document.querySelectorAll(r_burgerMenuGlobal.config._contentMenuCloned), function(element) {
          element.classList.remove(r_burgerMenuGlobal.config.CSS.classes.opened);
        });

        r_burgerMenuGlobal.closeMenu(e);
      } else {
        [].map.call(document.querySelectorAll(r_burgerMenuGlobal.config._contentMenuCloned), function(element) {
          element.classList.add(r_burgerMenuGlobal.config.CSS.classes.opened);
        });

        document.body.classList.add(r_burgerMenuGlobal.config.CSS.classes.opened);
      }
    }
  },

  cloneMenu: function () {
    var el = document.querySelector(this.config._contentMenu),
      clonedElement = el.cloneNode(true);
    if (document.querySelector(this.config._contentMenuCloned)) {
      document.querySelector(this.config._contentMenuCloned).appendChild(clonedElement);
    }
  }
};

;(function(window) {

    'use strict';
    r_burgerMenuGlobal.init();

})(window);







