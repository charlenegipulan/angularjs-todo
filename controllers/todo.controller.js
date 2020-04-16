var toDo = angular.module('toDo')

.controller('ToDoCtrl', ['$scope', function($scope){
    
    $scope.todos = [
        {
            task: 'do the laundry'
        },
        {
            task: 'mop the floor'
        },
        {
            task: 'read a book'
        }

    ]
}]);