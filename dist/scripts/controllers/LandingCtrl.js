(function(){
    function LandingCtrl($scope, Task){
        $scope.newTask = {};
        $scope.tasks = Task.all;
        
         $scope.hasItExpired = function(task){
             console.log("test");
            var currentTime = new Date().getTime();
            var taskCreated = task.createdAt;
             console.log(taskCreated);
             if ((currentTime - taskCreated ) >= 604800000) {
                Task.expiredTask(task);
                
            }
        }
        
        $scope.addTask = function(){
            console.log("code ran")
            Task.add($scope.newTask);
            $scope.newTask = {};
        }
        
        $scope.removeTask = function(task){
            Task.remove(task);
        }
        
        $scope.markComplete = function(task){
            Task.markCompleted(task);
        }
        
    }
    angular
        .module('blocItOff')
        .controller('LandingCtrl', ['$scope', 'Task' , LandingCtrl]);
})();