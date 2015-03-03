/**
 * Created by intelligrape on 4/2/15.
 */
angular.module('inquiry').config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/welcome');
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:"templates/home.html",
        controller:'HomeCtrl'
    })
        .state('about',{
            url:'/about',
         templateUrl:'templates/about.html',
         controller:'AboutCtrl'

        }).state("news",{
            url:'/news',
            templateUrl:'templates/news.html',
            controller:'NewsCtrl'

        }).
        state("contact",{
            url:'/contact',
           templateUrl:'templates/contact.html',
            controller:'ContactCtrl'
        })
        .state("welcome",{
            url:'/welcome',
            controller:'WelcomeCtrl',
            templateUrl:'templates/welcome.html'
        })
        .state("loginregister",{
            url:'/loginregister',
            controller:'LoginRegisterCtrl',
            templateUrl:'templates/loginregister.html'
        })
        .state("recharge",{
            url:'/recharge',
            controller:'RechargeCtrl',
            templateUrl:'templates/recharge/recharge.html'
        })
        .state("bustaxis",{
            url:'/bustaxis',
            controller:'BustaxisCtrl',
            templateUrl:'templates/bustaxis/bustaxis.html'
        })
})