(function () {
    'use strict';

    // <em-people-tab-dashboard>
    angular
        .module('app')
        .component('emPeopleTabDashboard', {
            bindings: {
                onSearch: '<'
            },
            controller: PeopleTabDashboardController,
            templateUrl: './app/components/dashboard-component/tabs/people-tab-dashboard.html'
        });

    PeopleTabDashboardController.$inject = ['$scope', 'modalService', 'tabsService'];

    function PeopleTabDashboardController(scope, modalService, tabsService) {
        var ctrl = this;

        ctrl.$onInit = function () {

            ctrl.activeTab = tabsService.getActiveTab();
            ctrl.employeesList = tabsService.getEmployeesList();
            ctrl.searchValue = tabsService.getSearchValue();

            ctrl.addModelId = 'add-employee-modal-' + scope.$id;
            ctrl.deleteModelId = 'delete-employee-modal-' + scope.$id;
            ctrl.editModelId = 'edit-employee-modal-' + scope.$id;

            ctrl.eployeeToCreateData = modalService.getEmployeeToCreate();
            ctrl.eployeeToEditData = modalService.getEmployeeToEdit();

            ctrl.addNewNewEmployee = function (newEmployee) {
                var defaultData = angular.copy(modalService.getDefaultEmployeeData());
                var tmpEmployeeDataForSave = Object.assign(defaultData, newEmployee);

                tabsService.addNewEmployee(tmpEmployeeDataForSave);
                modalService.closeModal();
                modalService.setEmployeeToCreate({});
            };

            ctrl.editEmployee = function (newEmployee) {
                var defaultData = angular.copy(modalService.getDefaultEmployeeData());
                var tmpEmployeeDataForSave = Object.assign(defaultData, newEmployee);

                tabsService.updateEmployee(tmpEmployeeDataForSave);
                modalService.closeModal();
                modalService.setEmployeeToEdit({});
            };

            ctrl.searchHandler = function (newValue) {
                tabsService.setSearchValue(newValue);
                ctrl.searchValue = tabsService.getSearchValue();
            };

            ctrl.setActiveTab = tabsService.setActiveTab;

            ctrl.openAddModal = function () {

                modalService.setEmployeeToCreate();
                angular.element('#' + ctrl.addModelId).modal('show');
            }
        };


        scope.$watch(function () {
            return tabsService.getActiveTab();
        }, function (newValue, oldValue) {
            if (newValue !== oldValue) {
                ctrl.activeTab = newValue;
            }
        });

        scope.$watch(function () {
            return tabsService.getSearchValue();
        }, function (newValue, oldValue) {
            if (newValue !== oldValue) {
                ctrl.searchValue = newValue;
            }
        });

        scope.$watch(function () {
                return tabsService.getEmployeesList();
            },
            function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    ctrl.employeesList = newValue;
                }
            });

        scope.$watch(function () {
                return modalService.getEmployeeToEdit();
            },
            function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    ctrl.eployeeToEditData = newValue;
                }
            });

        scope.$watch(function () {
                return modalService.getEmployeeToCreate();
            },
            function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    console.log('eployeeToCreateData', newValue);
                    ctrl.eployeeToCreateData = newValue;
                }
            });
    }

})();