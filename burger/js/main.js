var r_burgerMenuGlobal = {
  init: function () {

    this.config ={
      CSS:{
        classes:{
          opened:'opened', //Is opened
          btOverlay: 'bt-overlay', //Overlay container
        },
        ids:{
          clonedMenu:'cloned-menu' //Id of cloned Menu
        }
      },
      _buttonBurgerMenu: '.r_navigation__title--burger', //Button Action
      _contentMenu: '.r_main-navigation', //Navigation Container
      _contentMenuCloned: '.r_cloned-navigation', //Empty div to clone Navigation container
      openMenuVar: false
    };

    this.overlayMenu();
    this.cloneMenu();
    this.toggleMenu();
    this.debug();
  },

  debug: function () {
    console.log('Hello !');
  },

  closeOutsideMenu: function () {
    window.addEventListener('click', removeMenu);

    function removeMenu (element) {
      if (r_burgerMenuGlobal.config.openMenuVar && !document.getElementById(r_burgerMenuGlobal.config.CSS.ids.clonedMenu).contains(element.target)){
        document.querySelector(r_burgerMenuGlobal.config._contentMenuCloned).classList.remove(r_burgerMenuGlobal.config.CSS.classes.opened);
        document.querySelector(r_burgerMenuGlobal.config._contentMenuCloned).setAttribute("aria-hidden","true");
        document.body.classList.remove(r_burgerMenuGlobal.config.CSS.classes.opened);

        r_burgerMenuGlobal.config.openMenuVar = false;
        console.log('Outside Menu '+r_burgerMenuGlobal.config.openMenuVar);
      }
    }
  },

  overlayMenu: function() {
    var overlay = document.createElement('div');
    overlay.className = r_burgerMenuGlobal.config.CSS.classes.btOverlay;
    document.body.appendChild( overlay );
  },

  toggleMenu: function () {
    [].forEach.call(document.querySelectorAll(this.config._buttonBurgerMenu), function(el) {
      el.addEventListener('click', clickToggleMenu);
    });

    function clickToggleMenu (e) {
      e.stopPropagation();
      e.preventDefault();

      //Close
      if ( document.querySelector(r_burgerMenuGlobal.config._contentMenuCloned).classList.contains(r_burgerMenuGlobal.config.CSS.classes.opened) ) {
        [].map.call(document.querySelectorAll(r_burgerMenuGlobal.config._contentMenuCloned), function(element) {
          element.classList.remove(r_burgerMenuGlobal.config.CSS.classes.opened);
          element.setAttribute("aria-hidden","true");
          document.body.classList.remove(r_burgerMenuGlobal.config.CSS.classes.opened);
        });

        console.log('Closed Menu '+r_burgerMenuGlobal.config.openMenuVar);
        r_burgerMenuGlobal.config.openMenuVar = false;

      } else {
        //Open
        [].map.call(document.querySelectorAll(r_burgerMenuGlobal.config._contentMenuCloned), function(element) {
          element.classList.add(r_burgerMenuGlobal.config.CSS.classes.opened);
          element.setAttribute("aria-hidden","false");
          document.body.classList.add(r_burgerMenuGlobal.config.CSS.classes.opened);
          console.log('Opened Menu '+r_burgerMenuGlobal.config.openMenuVar);
        });

        r_burgerMenuGlobal.config.openMenuVar = true;
        r_burgerMenuGlobal.closeOutsideMenu();
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







