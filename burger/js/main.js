var r_burgerMenuGlobal = {
  init: function () {

    this.config ={
      CSS:{
        classes:{
          opened:'opened',
          active: 'active'
        },
        ids:{
          container:'maincontainer'
        }
      },
      _buttonMenu: '.r_navigation__title--burger',
      _contentMenu: '.r_main-navigation',
      _contentMenuCloned: '.r_cloned-navigation',
        isOpen: false
    };

    this.cloneMenu();
    this.toggleMenu();
    this.outsideMenu();
    this.debug();
  },

  debug: function () {
    console.log('Hello !');
  },

  toggleMenu: function () {
    [].forEach.call(document.querySelectorAll(this.config._buttonMenu), function(el) {
      el.addEventListener('click', clickOpenMenu);
    });

    function clickOpenMenu () {
        [].map.call(document.querySelectorAll(r_burgerMenuGlobal.config._contentMenuCloned), function(element) {
            element.classList.toggle(r_burgerMenuGlobal.config.CSS.classes.opened);

            r_burgerMenuGlobal.config.isOpen = true;
        });
    }


  },

  outsideMenu: function () {
/*    window.addEventListener('click', function(e){
      if (!document.getElementById('cloned-menu').contains(e.target)){
        if (document.querySelector(r_burgerMenuGlobal.config._contentMenuCloned).classList.contains(r_burgerMenuGlobal.config.CSS.classes.active)) {
          alert("Clicked out Box");
          document.querySelector(r_burgerMenuGlobal.config._contentMenuCloned).classList.remove(r_burgerMenuGlobal.config.CSS.classes.opened);
        }
      }
    });*/

      window.addEventListener( 'click', function(ev) {
          var target = ev.target;

          if( r_burgerMenuGlobal.config.isOpen == true && !document.getElementById('cloned-menu').contains(ev.target)) {
              alert('hello');
          }
      });
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







