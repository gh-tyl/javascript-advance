import userClass from "./userClass.js";
import prodClass from "./prodClass.js";
import cartClass from "./cartClass.js";

// init app
const shopApp = angular.module("shopApp", ["ngRoute"]);
shopApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
        })
        .when("/prod", {
            templateUrl: "templates/prod.html"
        })
        .when("/cart", {
            templateUrl: "templates/cart.html"
        })
        .otherwise({
            templateUrl: "templates/404.html"
        });
});
