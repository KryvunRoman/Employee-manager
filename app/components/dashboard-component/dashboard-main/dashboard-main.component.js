(function () {
    'use strict';

    // <em-dashboard-component>
    angular
        .module('app')
        .component('emDashboardComponent', {
            bindings: {},
            controller: tabsController,
            templateUrl: './app/components/dashboard-component/dashboard-main/dashboard-main.html'
        });

    tabsController.$inject = ['$scope', 'tabsService'];

    function tabsController(scope, tabsService) {
        var ctrl = this;

        ctrl.activeTab = tabsService.getActiveTab();
        ctrl.isUpdateModalOpen = false;
        ctrl.isAddModalOpen = false;
        ctrl.currentEmployee = {};

        scope.$watch(function () { return tabsService.getActiveTab(); }, function (newValue, oldValue) {
            if (newValue !== oldValue) {
                ctrl.activeTab = newValue;
            }
        });
    }

})();