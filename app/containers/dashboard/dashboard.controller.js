(function () {
    'use strict';

    angular
        .module('app')
        .controller('dashboardController', DashboardController);

    DashboardController.$inject = ['$log', 'employeService', 'tabsService'];

    function DashboardController($log, employeService, tabsService) {

        employeService
            .getAllEmployees()
            .then(
                function (data) {
                    tabsService.setEmployeesList(data);
                },
                function (data) {
                    $log.error(data);
                }
            );

        employeService
            .getAllSkills()
            .then(
                function (data) {
                    tabsService.setSkillList(data);
                },
                function (data) {
                    $log.error(data);
                }
            );
    }

})();