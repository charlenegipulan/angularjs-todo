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

    $scope.add = function(thing) {
        var newTodo = {
            task: thing,
        };
        $scope.todos.push(newTodo);
    }

    $scope.addTodo = function(task) {
        $scope.add(task);
        $scope.item = '';
    }


}])
