app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/");

$stateProvider
    .state('landingpage', {
      url: '/',
      controller: "MainController",
      templateUrl: "../partials/langingpage.html"
    })
    .state('signup', {
      url: '/signup',
      controller: "MainController",
      templateUrl: "../partials/signup.html"
    })
    .state('login', {
      url: '/login',
      controller: "MainController",
      templateUrl: "../partials/login.html"
    })
    .state('profile', {
      url: '/profile',
      controller: "MainController",
      templateUrl: "../partials/profile.html"
    })
    .state('about', {
      url: '/about',
      controller: "MainController",
      templateUrl: "../partials/about.html"
    })
    .state('ebook', {
      url: '/ebook',
      controller: "MainController",
      templateUrl: "../partials/ebook.html"
    })
    .state('app', {
      url: '/app',
      controller: "MainController",
      templateUrl: "../partials/app.html"
    })
    .state('contact', {
      url: '/contact',
      controller: "ContactFormController",
      templateUrl: "../partials/contact.html"
    })

  $locationProvider.html5Mode(true);
});
