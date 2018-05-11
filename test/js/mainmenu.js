'use strict';
(function () {
    var changeBrand = function () {
        if($(window).width() < 767) {
            $('.navbar-brand img').hide();
            $('.navbar-brand strong').show();
        } else {
            $('.navbar-brand img').show();
            $('.navbar-brand strong').hide();
        }
    };

    changeBrand()
    
    $(window).on('resize', function () {
        changeBrand();
    });

})();

