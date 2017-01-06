app.controller('MainController', function($scope) {
    $scope.working = "Angular is working"

    $(document).ready(function() {
        $('.parallax').parallax();
        $(".button-collapse").sideNav();
      $('.carousel.carousel-slider').carousel({full_width: true});
    });

});
