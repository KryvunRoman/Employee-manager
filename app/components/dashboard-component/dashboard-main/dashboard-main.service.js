(function () {
    'use strict';

    angular
        .module('app')
        .factory('tabsService', tabsService);

    tabsService.$inject = [];

    function tabsService() {

        var ctrl = this;

        var DEFAULT_TAB_INDEX = 1;

        var activeTab = DEFAULT_TAB_INDEX,
            searchValue = '',
            employeesList = [],
            skillList = [];

        return {
            addNewEmployee: addNewEmployee,
            getActiveTab: getActiveTab,
            getEmployeesList: getEmployeesList,
            setDropdownValue: setDropdownValue,
            getSkillList: getSkillList,
            getSearchValue: getSearchValue,
            openUpdateModal: openUpdateModal,
            openAddModal: openAddModal,
            updateEmployee: updateEmployee,
            setSearchValue: setSearchValue,
            searchHandler: searchHandler,
            setActiveTab: setActiveTab,
            setEmployeesList: setEmployeesList,
            setSkillList: setSkillList
        };

        function setDropdownValue(modelObject, key, value) {
            return modelObject[key] = value;
        }

        function getSkillList() {
            return skillList;
        }

        function setSkillList(list) {
            skillList = list || [];
        }

        function getSearchValue() {
            return searchValue;
        }

        function setSearchValue(newValue) {
            searchValue = newValue;
        }

        function getEmployeesList() {
            return employeesList || [];
        }

        function setEmployeesList(list) {
            employeesList = Array.isArray(list) ? list : [];
        }

        function setActiveTab(tabIndex) {
            activeTab = tabIndex;
        }

        function getActiveTab() {
            return activeTab;
        }

        function searchHandler(tabIndex) {
            ctrl.activeTab = tabIndex;
        }

        function openUpdateModal(employee) {
            ctrl.isUpdateModalOpen = true;
            ctrl.currentEmployee = employee;
        }

        function openAddModal() {
            ctrl.isAddModalOpen = true;
        }

        function addNewEmployee(employee) {
            employee.id = new Date().getTime();

            setEmployeesList(getEmployeesList().concat(employee));
        }

        function updateEmployee(employee) {

            var newEmployeesList = getEmployeesList().map(function (item) {
                return item.id === employee.id ? employee : item
            });

            setEmployeesList(newEmployeesList);
        }
    }

})();