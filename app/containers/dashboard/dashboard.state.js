(function () {
    'use strict';

    angular
        .module('app')
        .config(DashboardStateConfig);

    DashboardStateConfig.$inject = ['$stateProvider'];

    function DashboardStateConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: './app/containers/dashboard/dashboard.html',
                controller: 'dashboardController'
            });
    }

})();