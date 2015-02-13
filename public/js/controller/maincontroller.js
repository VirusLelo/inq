angular.module('inquiry').controller('MainCtrl',function($scope){
    $scope.hellomsg="Hello message in java";
    $scope.currentDate=new Date();
    setInterval(function(){

        $scope.currentDate=new Date();
        $scope.$apply();
    },100)
})