(function () {
    'use strict';

    // <em-pie-chart>
    angular
        .module('app')
        .component('emPieChart', {
            bindings: {
                title: '@',
                chartData: '<',
                key: '@'
            },
            controller: chartController,
            templateUrl: './app/components/charts/pie-chart.html'
        });

    chartController.$inject = ['$element', 'chartService'];

    function chartController($element, chartService) {
        var ctrl = this;
        ctrl.initChart = chartService.initChart;

        ctrl.$doCheck = function () {
            ctrl.initChart($element);
        }
    }

})();