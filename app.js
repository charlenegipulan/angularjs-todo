var app = angular.module('toDo', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/main', {
        templateUrl: 'views/main.html',
        controller: 'ToDoCtrl'
    }).
    when('/add', {
        templateUrl: 'views/add-new.html',
        controller: 'AddNewToDoCtrl'
    }).
    otherwise({redirectTo: '/main'})
    $locationProvider.hashPrefix('');
}]);

