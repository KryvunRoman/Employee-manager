(function () {
    'use strict';

    // <em-table-people>
    angular
        .module('app')
        .component('emTablePeople', {
            bindings: {
                eployeesList: '<',
                deleteModalId: '<',
                editModalId: '<',
                openUpdateModal: '&',
                searchString: '<'
            },
            controller: TableController,
            templateUrl: './app/components/dashboard-component/table/table-people.html'
        });

    TableController.$inject = ['modalService'];

    function TableController(modalService) {
        var ctrl = this;

        ctrl.openDeleteModal = function (employee) {
            modalService.setEmployeeToDelete(employee);
            angular.element('#' + ctrl.deleteModalId).modal('show');
        };

        ctrl.openEditModal = function (employee) {
            modalService.setEmployeeToEdit(employee);
            angular.element('#' + ctrl.editModalId).modal('show');
        };
    }

})();