const firstSpa = angular.module('firstSpa', ['ngRoute']);
firstSpa.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'aboutCtrl'
        })
        .when('/contactus', {
            templateUrl: 'templates/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({
            redirectTo: 'templates/404.html'
        });
});
firstSpa.controller('homeCtrl', function ($scope, $rootScope) {
    $scope.msg = 'Home Page';
    $scope.changeName = function () {
        $rootScope.name = $scope.name;
    }
    $scope.hideLink = function () {
        $rootScope.hide = $scope.hide;
    }
});
firstSpa.controller('aboutCtrl', function ($scope) {
    $scope.msg = 'About Page';
});
firstSpa.controller('contactCtrl', function ($scope) {
    $scope.msg = 'Contact Page';
});
