(function () {
    'use strict';

    angular
        .module('app')
        .factory('employeService', employeService);

    employeService.$inject = ['$q', 'employeeDataService'];

    function employeService($q, employeeDataService) {

        return {
            getAllEmployees: getAllEmployees,
            getAllSkills: getAllSkills
        };

        function getAllEmployees() {
            var deferred = $q.defer();

            employeeDataService
                .getAllEmployees()
                .then(function (response) {
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                })
                .catch(function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        }

        function getAllSkills() {
            var deferred = $q.defer();

            employeeDataService
                .getAllSkills()
                .then(function (response) {
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                })
                .catch(function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        }
    }

})();