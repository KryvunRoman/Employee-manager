(function () {
    'use strict';

    // <em-navbar-dashboard>
    angular
        .module('app')
        .component('emNavbarDashboard', {
            bindings: {
                onSearch: '<'
            },
            controller: NavbarDashboardController,
            templateUrl: './app/components/dashboard-component/navbar/navbar-dashboard.html'
        });

    NavbarDashboardController.$inject = ['$scope', 'tabsService'];

    function NavbarDashboardController(scope, tabsService) {
        var ctrl = this;

        ctrl.$onInit = function () {

            ctrl.activeTab = tabsService.getActiveTab();
            ctrl.searchValue = tabsService.getSearchValue();
            ctrl.setActiveTab = tabsService.setActiveTab;

            ctrl.searchHandler = function (newValue) {
                tabsService.setSearchValue(newValue);
            };
        };


        scope.$watch(function () {
            return tabsService.getActiveTab();
        }, function (newValue, oldValue) {
            if (newValue !== oldValue) {
                ctrl.activeTab = newValue;
            }
        });

    }

})();