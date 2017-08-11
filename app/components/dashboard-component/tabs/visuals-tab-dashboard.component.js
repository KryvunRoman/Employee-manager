(function () {
    'use strict';

    // <em-visuals-tab-dashboard>
    angular
        .module('app')
        .component('emVisualsTabDashboard', {
            bindings: {},
            controller: VisualsTabDashboardController,
            templateUrl: './app/components/dashboard-component/tabs/visuals-tab-dashboard.html'
        });

    VisualsTabDashboardController.$inject = ['$scope', 'tabsService', 'visualsTabDashboardService'];

    function VisualsTabDashboardController(scope, tabsService, visualsTabDashboardService) {
        var ctrl = this;

        ctrl.$onInit = function () {

            ctrl.activeTab = tabsService.getActiveTab();
            ctrl.searchValue = tabsService.getSearchValue();

            ctrl.employeesList = tabsService.getEmployeesList();

            filterEmployees(ctrl.employeesList);

            ctrl.searchHandler = function (newValue) {
                tabsService.setSearchValue(newValue);
                ctrl.searchValue = tabsService.getSearchValue();
            };

            ctrl.setActiveTab = tabsService.setActiveTab;
        };

        function filterEmployees(list) {
            ctrl.employeesListByAge = visualsTabDashboardService.filterAgeEmployee(list);
        }

        scope.$watch(function () {
                return tabsService.getEmployeesList();
            },
            function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    ctrl.employeesList = newValue;
                    ctrl.employeesListByAge = visualsTabDashboardService.filterAgeEmployee(list);
                }
            });
    }

})();