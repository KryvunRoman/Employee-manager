(function () {
    'use strict';

    angular
        .module('app')
        .factory('employeeDataService', employeeDataService);

    employeeDataService.$inject = ['$http', '$q', '$log'];

    function employeeDataService($http, $q, $log) {

        const basePath = './mocked-data';

        return {
            getAllEmployees: getAllEmployees,
            getAllSkills: getAllSkills
        };

        function getAllEmployees() {
            var deferred = $q.defer();

            $http
                .get(basePath + '/employees.json')
                .then(function (response) {
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response.data);
                })
                .catch(function (response) {
                    deferred.reject(response.data);
                });

            return deferred.promise;
        }

        function getAllSkills() {
            var deferred = $q.defer();

            $http
                .get(basePath + '/skills.json')
                .then(function (response) {
                    deferred.resolve(response.data);
                }, function (response) {
                    deferred.reject(response.data);
                })
                .catch(function (response) {
                    deferred.reject(response.data);
                });

            return deferred.promise;
        }
    }

})();