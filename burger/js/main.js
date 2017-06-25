var r_burgerMenuGlobal = {
  init: function () {
    this.config ={
      _buttonMenu: document.querySelectorAll('.r_navigation__title--burger'),
      _contentMenu: document.querySelectorAll('.r_cloned-navigation')
    };

    this.cloneMenu();
    this.openCloseMenu();
    this.debug();
  },

  debug: function (){
    console.log('Hello !');
  },

  openCloseMenu: function () {
    [].forEach.call(document.querySelectorAll('.r_navigation__title--burger'), function(el) {
      el.addEventListener('click', function() {
        console.log('clicked');

          [].map.call(r_burgerMenuGlobal.config._contentMenu, function(element) {
              element.classList.toggle("active");
          });
      });
    });
  },

  cloneMenu: function () {
    var el = document.querySelector('.r_main-navigation'),
        clonedElement = el.cloneNode(true);

    if (r_burgerMenuGlobal.config._contentMenu.length) {
      document.querySelector('.r_cloned-navigation').appendChild(clonedElement);
    }
  }
};

r_burgerMenuGlobal.init();
