var app = angular.module('todoApp', []);

app.controller('taskCtrl', function ($scope) {
    $scope.taskList = [{
        taskText: 'Testitaski',
        done: false
    }];

    $scope.taskAdd = function () {
        $scope.taskList.push({
            taskText: $scope.taskInput,
            done: false
        });
        $scope.taskInput = "";
    };

    $scope.remove = function () {
        var oldList = $scope.taskList;
        $scope.taskList = [];
        angular.forEach(oldList, function (x) {
            if (!x.done) $scope.taskList.push(x);
        });
    };
});
