(function () {
    "use strict";

    angular
        .module("app")
        .config(appStateConfig);

    appStateConfig.$inject = ["$urlRouterProvider"];

    function appStateConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    }

})();