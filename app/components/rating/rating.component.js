(function () {
    'use strict';

    // <em-rating>
    angular
        .module('app')
        .component('emRating', {
            bindings: {
                max: '@',
                rate: '<'
            },
            controller: ButtonController,
            templateUrl: './app/components/rating/rating.html'
        });

    ButtonController.$inject = ['buttonService'];

    function ButtonController(buttonService) {
        var ctrl = this;

        var DEFAULT_NUMBER = 3,
            DEFAULT_RATE = 0;

        ctrl.$onInit = function () {
            ctrl.number = parseInt(ctrl.max, 10) || DEFAULT_NUMBER;
            ctrl.currentRate = parseInt(ctrl.rate, 10) || DEFAULT_RATE;
            ctrl.getNumber = function (num) {
                return new Array(num);
            }
        };

        ctrl.$onChanges = function (changeObj) {
            if (changeObj.rate) {
                ctrl.currentRate = parseInt(changeObj.rate.currentValue, 10) || DEFAULT_NUMBER;
            }
            if (changeObj.max) {
                ctrl.number = parseInt(changeObj.max.currentValue, 10) || DEFAULT_RATE;
            }
        }
    }

})();