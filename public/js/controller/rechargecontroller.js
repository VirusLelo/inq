
angular.module('inquiry').controller('RechargeCtrl',function($scope){
    console.log('Recharge Controller');
    $scope.tabs = [
        { title:"Mobile Recharge", content:"templates/recharge/mobilerecharge.html" },
        { title:"DTH Recharge", content:"templates/recharge/dthrecharge.html" },
        { title:"Data Card Recharge", content:"templates/recharge/datacardrecharge.html" },
        { title:"Other Bills", content:"templates/recharge/othersbills.html"}
    ];

})
