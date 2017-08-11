(function () {
    'use strict';

    angular
        .module('app')
        .factory('visualsTabDashboardService', VisualsTabDashboardService);

    VisualsTabDashboardService.$inject = [];

    function VisualsTabDashboardService() {

        return {
            filterAgeEmployee: filterAgeEmployee
        };

        function filterAgeEmployee(list) {

            var RANGE_1 = '18-25',
                RANGE_2 = '26-32',
                RANGE_3 = '33-100';

            var RANGE_1_START = 18,
                RANGE_1_END = 26,
                RANGE_2_START = RANGE_1_END,
                RANGE_2_END = 33,
                RANGE_3_START = RANGE_2_END,
                RANGE_3_END = 100;

            return list.map(function (item) {
                if (item.age >= RANGE_1_START && item.age < RANGE_1_END) {
                    return {ageRange: RANGE_1};

                } else if (item.age >= RANGE_2_START && item.age < RANGE_2_END) {
                    return {ageRange: RANGE_2};

                } else if (item.age >= RANGE_3_START && item.age <= RANGE_3_END) {
                    return {ageRange: RANGE_3};
                }
            });
        }

    }

})();