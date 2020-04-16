var app = angular.module('toDo', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/main', {
        templateUrl: 'views/main.html',
        controller: 'ToDoCtrl'
    }).
    otherwise({redirectTo: '/main'});
}]);

