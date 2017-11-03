var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngSanitize', 'ngMessages']);
console.log('myApp sourced');

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
// example controllers below. 
    // }).when('/mario', {
    //     templateUrl: 'views/mario.html',
    //     controller: 'MarioController as mc'
    }).otherwise({
        redirectTo: '/'
    });
});