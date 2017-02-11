(function(){
    function Task($firebaseArray){
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);
        
        var addTask = function(task){
            task.createdAt = firebase.database.ServerValue.TIMESTAMP;
            task.completed = false;
            return tasks.$add(task);
            
        }
        
        var removeTask = function(task) {
            tasks.$remove(task);
        }
        
        return{
            all : tasks,
            add : addTask,
            remove : removeTask
        };
    }
    angular
        .module('blocItOff')
        .factory('Task', ['$firebaseArray', Task])
})();