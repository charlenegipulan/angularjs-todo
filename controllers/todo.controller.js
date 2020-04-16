var toDo = angular.module('toDo')

.controller('ToDoCtrl', ['$scope', function($scope){
    
    $scope.todos = ["do the laundry", "mop the floor", "finish two chapters from the book you are reading"
    ]
}]);