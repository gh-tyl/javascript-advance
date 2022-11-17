import carClass from '../class/carClass.js'

const myApp = angular.module('myApp', ['ngRoute']);
myApp.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .when('/japan', {
            templateUrl: 'templates/japan.html',
            controller: 'JpCtrl'
        })
        .when('/korea', {
            templateUrl: 'templates/korea.html',
            controller: 'JpCtrl'
            // controller: 'KrCtrl'
        })
        .when('/canada', {
            templateUrl: 'templates/canada.html',
            // controller: 'CaCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

let carList = new Map();
myApp.controller('homeCtrl', function ($scope) {
    $scope.loadJson = function () {
        fetch('./data/car.json').then(
            (data) => {
                // you need to put your own variable name (eg. cars)
                data.json().then((cars) => {
                    // console.log(cars)
                    cars.forEach((car) => {
                        let carObj = new carClass(car.id, car.model, car.years, car.price, car.color)
                        carList.set(car.id, carObj)
                    })
                })
            }
        )
    }
    $scope.loadJson()
    console.log(carList)
});

myApp.controller('JpCtrl', function ($scope, $rootScope) {
    $scope.msg = "I LOVE programing....";
    $scope.img_src = "./images/japan.png";
    console.log($scope.img_src);
});
