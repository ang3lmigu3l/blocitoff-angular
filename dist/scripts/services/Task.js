(function(){
    function Task($firebaseArray){
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);
        
        var completedTask = function(task){
            task.completed = true ;
            tasks.$save(task);
           
        }
        
        var addTask = function(task){
            task.createdAt = (new Date()).getDate();
            task.completed = false;
            return tasks.$add(task);
            
        }
        
        var removeTask = function(task) {
            tasks.$remove(task);
        }
        
        return{
            all : tasks,
            add : addTask,
            completed : completedTask,
            remove : removeTask
        };
    }
    angular
        .module('blocItOff')
        .factory('Task', ['$firebaseArray', Task])
})();