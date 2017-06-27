var r_burgerMenuGlobal = {
  init: function () {
    this.config ={
      _buttonMenu: '.r_navigation__title--burger',
      _contentMenu: '.r_main-navigation',
      _contentMenuCloned: '.r_cloned-navigation',
    };

    this.cloneMenu();
    this.toggleMenu();
    this.outsideMenu();
    this.debug();
  },

  debug: function (){
    console.log('Hello !');
  },

  toggleMenu: function () {
    [].forEach.call(document.querySelectorAll(this.config._buttonMenu), function(el) {
      el.addEventListener('click', function() {
        [].map.call(document.querySelectorAll(r_burgerMenuGlobal.config._contentMenuCloned), function(element) {
            element.classList.toggle("active");
        });
      });
    });
  },

  outsideMenu: function () {
    window.addEventListener('click', function(e){
      if (!document.getElementById('cloned-menu').contains(e.target)){
        if (document.querySelector(r_burgerMenuGlobal.config._contentMenuCloned).classList.contains('active')) {
          alert("Clicked in Box");
          document.querySelector(r_burgerMenuGlobal.config._contentMenuCloned).classList.remove('active');
        }
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

(function() {
  r_burgerMenuGlobal.init();
}());