(function () {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.dishes = '';
    $scope.check = function () {
        var numOfDishes = calcNumberOfDishes($scope.dishes);

        messageUpdate(numOfDishes);
        colorUpdate(numOfDishes);
    }

    function calcNumberOfDishes (dishes) {
        var count = 0;
            if (dishes) {
                count = dishes.split(',').length;  
            }
        return count;  
    }

    function messageUpdate(numberOfDishes) {
        if (numberOfDishes === 0) {
            $scope.message = 'Please enter data first';
        } else if (numberOfDishes <= 3) {
            $scope.message = 'Enjoy!';
        } else {
            $scope.message = 'Too much!';
        }
    }

    function colorUpdate(numberOfDishes) {
        $scope.color = numberOfDishes === 0 ? 'red' : 'green';
    }

}})();