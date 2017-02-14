(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('landing',{
            url: '/',
            controller: 'LandingCtrl as landing',
            templateUrl: 'templates/landing.html'
        });
        $stateProvider
            .state('history',{
            url:'/history',
            controller: 'HistoryCtrl as history',
            templateUrl: 'templates/history.html'
        })
    };
    angular
        .module('blocItOff', ['ui.router','ui.bootstrap', 'firebase', 'ngAnimate'])
        .config(config);
    
})();