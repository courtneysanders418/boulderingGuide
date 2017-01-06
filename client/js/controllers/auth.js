app.controller('auth', function($scope, $cookieStore, authService, $location) {
    $location.signupURL()
    $scope.userObj = {}

    $scope.signup = function(obj) {
        console.log(obj);
        authService.signup(obj)
    }

    $scope.login = function(obj) {
        // authService.login(obj)
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];

    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/signup']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }
  })

  module.exports = {

    'facebookAuth' : {
        'clientID'      : '309717429429579', // your App ID
        'clientSecret'  : '24f6d03656f461d79622b0149f321713', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : '24f6d03656f461d79622b0149f321713',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '309717429429579',
        'clientSecret'  : '24f6d03656f461d79622b0149f321713',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
