(function () {
    'use strict';

    // <em-search>
    angular
        .module('app')
        .component('emSearch', {
            bindings: {
                onSearch: '<'
            },
            controller: searchController,
            templateUrl: './app/components/search/search.html'
        });

    searchController.$inject = [];

    function searchController() {
        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.searchValue = '';

            ctrl.searchHandler = function () {
                ctrl.onSearch(ctrl.searchValue);
            }
        }

    };

})();