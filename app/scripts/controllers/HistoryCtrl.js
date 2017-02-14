(function(){
    function HistoryCtrl($scope, Task){ 
        console.log('testing');
        $scope.expiredTasks = Task.expired;
        $scope.completedTasks = Task.completed;
        $scope.newArray = $scope.expiredTasks.concat($scope.completedTasks);
        
        console.log($scope.newArray);
        
    }
    angular
        .module('blocItOff')
        .controller('HistoryCtrl', ['$scope', 'Task' , HistoryCtrl]);
})();