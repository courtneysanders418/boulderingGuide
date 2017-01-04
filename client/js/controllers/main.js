app.controller('MainController', function($scope) {
    $scope.working = "Angular is working"

    $(document).ready(function() {
        $('.parallax').parallax();
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });

    $(".button-collapse").sideNav();

})
