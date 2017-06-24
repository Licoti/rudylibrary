var r_burgerMenuGlobal = {
    init: function () {
        this.debug();
        this.openCloseMenu();
        this.cloneMenu();
    },
    debug: function (){
        console.log('Hello !')
    },
    openCloseMenu: function () {
        var self = this;

        self.config ={
            _buttonMenu: document.querySelectorAll('.r_navigation__title--burger'),
            _contentMenu: document.querySelectorAll('.r_navigation')
        };

        [].forEach.call(document.querySelectorAll('.r_navigation__title--burger'), function(el) {
            el.addEventListener('click', function() {
                [].map.call(self.config._contentMenu, function(element) {
                    element.classList.toggle("active");
                });
            });
        });
    },
    cloneMenu: function () {

    }
};

document.addEventListener('DOMContentLoaded', function() {
    r_burgerMenuGlobal.init();
});