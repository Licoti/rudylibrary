var r_burgerMenuGlobal = {
  init: function () {
    this.debug();
    this.cloneMenu();
    this.openCloseMenu();
  },
  debug: function (){
    console.log('Hello !')
  },
  openCloseMenu: function () {
    var self = this;

    self.config ={
      _buttonMenu: document.querySelectorAll('.r_navigation__title--burger'),
      _contentMenu: document.querySelectorAll('.r_cloned-navigation')
    };

    [].forEach.call(self.config._buttonMenu, function(el) {
      el.addEventListener('click', function() {
          [].map.call(self.config._contentMenu, function(element) {
              element.classList.toggle("active");
          });
      });
    });
  },
  cloneMenu: function () {
    var el = document.querySelector('.r_main-navigation');
    var clonedElement = el.cloneNode(true);

    document.querySelector('.r_cloned-navigation').appendChild(clonedElement);
  }
};

r_burgerMenuGlobal.init();
