// app.config(function($routeProvider, $locationProvider) {
//     $routeProvider
//         .when('/', {
//             templateURL: './templates/langingpage.html',
//             controller: 'MainController'
//         })
//         $locationProvider.html5Mode(true);
// })

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('landingpage', {
      url: '/',
      controller: "HomeController",
      templateUrl: "./templates/langingpage.html"
    })
  $locationProvider.html5Mode(true);
});
