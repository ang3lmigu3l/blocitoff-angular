(function(){
    function LandingCtrl($scope, Task){
        $scope.newTask = {};
        $scope.tasks = Task.all;
        
        $scope.addTask = function(){
            console.log("code ran")
            Task.add($scope.newTask);
            $scope.newTask = {};
        }
        
        $scope.removeTask = function(task){
            Task.remove(task);
        }
        
    }
    angular
        .module('blocItOff')
        .controller('LandingCtrl', ['$scope', 'Task' , LandingCtrl]);
})();