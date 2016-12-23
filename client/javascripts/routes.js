app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateURL: '../views/langingpage.html',
            controller: 'MainController'
        })
        $locationProvider.html5Mode(true);
})
