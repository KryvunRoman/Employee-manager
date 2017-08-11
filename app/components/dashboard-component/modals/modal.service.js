(function () {
    'use strict';

    angular
        .module('app')
        .factory('modalService', ModalService);

    ModalService.$inject = [];

    function ModalService() {

        var employeeToCreate = {},
            employeeToDelete = {},
            employeeToEdit = {};

        var defaultEmployeeData = {
            age: 18,
            level: '1',
            name: 'No name',
            skill: 'HTML'
        };

        return {
            getDefaultEmployeeData: getDefaultEmployeeData,
            getEmployeeToCreate: getEmployeeToCreate,
            getEmployeeToDelete: getEmployeeToDelete,
            getEmployeeToEdit: getEmployeeToEdit,

            closeModal: closeModal,
            submitModal: submitModal,

            setEmployeeToCreate: setEmployeeToCreate,
            setEmployeeToDelete: setEmployeeToDelete,
            setEmployeeToEdit: setEmployeeToEdit
        };


        function getDefaultEmployeeData() {
            return defaultEmployeeData;
        }

        function setEmployeeToCreate() {
            employeeToCreate = {};
        }

        function getEmployeeToCreate() {
            return employeeToCreate;
        }

        function setEmployeeToEdit(employee) {
            employeeToEdit = angular.copy(employee);
        }

        function getEmployeeToEdit() {
            return employeeToEdit;
        }

        function setEmployeeToDelete(employee) {
            employeeToDelete = employee || null;
        }

        function getEmployeeToDelete() {
            return employeeToDelete;
        }

        function closeModal() {
            angular.element('.modal.in').modal('hide');
        }

        function submitModal(form) {
            var ctrl = this;
            if (!form.$invalid) {
                ctrl.saveModal({'employee': ctrl.customEmployee});
                ctrl.closeModal();
            } else {
                ctrl.isFormInvalid = true;
            }
        }
    }

})();