(function () {
    'use strict';

    // <em-modal-delete-employee />
    angular
        .module('app')
        .component('emModalUpdateEmployee', {
            bindings: {
                modalId: '<',
                title: '<',
                tmpEmployeeData: '<',
                onSybmitHandler: '<'
            },
            controller: ModalDeleteEmployeeController,
            templateUrl: './app/components/dashboard-component/modals/modal-update-employee.html'
        });

    ModalDeleteEmployeeController.$inject = ['modalService', 'tablePeopleService', 'tabsService'];

    function ModalDeleteEmployeeController(modalService, tablePeopleService, tabsService) {
        var ctrl = this;

        ctrl.allSkils = [];

        ctrl.$onInit = function () {
            ctrl.allSkils = tabsService.getSkillList();
            ctrl.setDropdownValue = tabsService.setDropdownValue;
            ctrl.sybmitHandler = function () {
                console.log('sybmitHandler', ctrl.tmpEmployeeData);
                ctrl.onSybmitHandler(ctrl.tmpEmployeeData);
            };

            ctrl.deleteEmployee = function () {
                tablePeopleService.removeEmployee(tablePeopleService.getEmployeeToDelete());
            }
        };
    }

})();