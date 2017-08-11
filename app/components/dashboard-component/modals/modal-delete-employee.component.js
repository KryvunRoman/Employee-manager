(function () {
    'use strict';

    // <em-modal-delete-employee />
    angular
        .module('app')
        .component('emModalDeleteEmployee', {
            bindings: {
                modalId: '<'
            },
            controller: ModalDeleteEmployeeController,
            templateUrl: './app/components/dashboard-component/modals/modal-delete-employee.html'
        });

    ModalDeleteEmployeeController.$inject = ['modalService', 'tablePeopleService'];

    function ModalDeleteEmployeeController(modalService, tablePeopleService) {
        var ctrl = this;

        ctrl.$onInit = function () {

            ctrl.getEmployeeToDelete = tablePeopleService.getEmployeeToDelete;

            ctrl.deleteEmployee = function () {
                tablePeopleService.removeEmployee(modalService.getEmployeeToDelete());
            }
        };
    }

})();