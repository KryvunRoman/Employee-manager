(function () {
    'use strict';

    angular
        .module('app')
        .factory('tablePeopleService', TablePeopleService);

    TablePeopleService.$inject = ['tabsService', 'modalService'];

    function TablePeopleService(tabsService, modalService) {
        var ctrl = this;

        return {
            removeEmployee: removeEmployee,
        };

        function removeEmployee() {

            var employeeToDelete = modalService.getEmployeeToDelete();

            var newEployeesList = tabsService.getEmployeesList().filter(function (employee) {
                return employee.id !== employeeToDelete.id;
            });

            tabsService.setEmployeesList(newEployeesList);

            modalService.setEmployeeToDelete();
            modalService.closeModal();
        }

    }

})();