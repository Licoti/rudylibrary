/**
 * @Todo :
 * - resize event
 * - add class to display animated cross on opened
 */
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
      openMenuVar: false,
        ivar: false
    };

    this.OverlayMenu();
    this.CloneMenu();
    this.ToggleMenu();
    this.Debug();
    this.CloseOnResizeEvent();
  },

  Debug: function () {
    console.log('Hello !');
  },

  CloseMenu: function () {
    var self = this;

    document.querySelector(self.config._contentMenuCloned).classList.remove(self.config.CSS.classes.opened);
    document.body.classList.remove(self.config.CSS.classes.opened);
    document.querySelector(self.config._contentMenuCloned).setAttribute("aria-hidden","true");

    self.config.openMenuVar = false;
    console.log('Closed Menu '+self.config.openMenuVar);
  },

  closeOutsideMenu: function () {
    var self = this;

    var removeMenu = function (element) {
      if (self.config.openMenuVar && !document.getElementById(self.config.CSS.ids.clonedMenu).contains(element.target)){
        self.CloseMenu();
        console.log('Outside Menu '+self.config.openMenuVar);
      }
    };

    window.addEventListener('click', removeMenu);
  },

  OverlayMenu: function() {
    var overlay = document.createElement('div');
    overlay.className = this.config.CSS.classes.btOverlay;
    document.body.appendChild(overlay);
  },

  ToggleMenu: function () {
    var self = this;

    var clickToggleMenu = function (e) {
      e.stopPropagation();
      e.preventDefault();

      //Close
      if ( document.querySelector(self.config._contentMenuCloned).classList.contains(self.config.CSS.classes.opened) ) {
        [].map.call(document.querySelectorAll(self.config._contentMenuCloned), function(element) {
          self.CloseMenu();
        });

        console.log('On Closed Menu '+self.config.openMenuVar);
      } else {
        //Open
        [].map.call(document.querySelectorAll(self.config._contentMenuCloned), function(element) {
          element.classList.add(self.config.CSS.classes.opened);
          element.setAttribute("aria-hidden","false");
          document.body.classList.add(self.config.CSS.classes.opened);
          console.log('Opened Menu '+self.config.openMenuVar);
        });

        self.config.openMenuVar = true;
        self.closeOutsideMenu();
      }
    };

    [].forEach.call(document.querySelectorAll(this.config._buttonBurgerMenu), function(el) {
        el.addEventListener('click', clickToggleMenu);
    });
  },

  CloneMenu: function () {
    var el = document.querySelector(this.config._contentMenu),
      clonedElement = el.cloneNode(true);
    if (document.querySelector(this.config._contentMenuCloned)) {
      document.querySelector(this.config._contentMenuCloned).appendChild(clonedElement);
    }
  },

  CloseOnResizeEvent: function () {
    var resizeTimer;
    var self = this;

    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {

        if (window.matchMedia("(min-width: 768px)").matches) {
          if ( self.config.openMenuVar ) {
            self.CloseMenu();
          }
        }

      }, 250);
    });
  }
};

;(function() {

  'use strict';

  r_burgerMenuGlobal.init();

})();





