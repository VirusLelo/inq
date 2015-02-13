
angular.module('inquiry').controller('HomeCtrl',function($scope){
   setInterval(function(){
       $scope.currentDate=new Date();

   },1000)
})
