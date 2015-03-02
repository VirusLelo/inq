angular.module('inquiry')
    .controller('SearchCtrl',function($scope, searchresult){
        console.log('searchCtrl',searchresult.result);
        $scope.result=searchresult.result;
    });