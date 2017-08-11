(function () {
    'use strict';

    // <em-button>
    angular
        .module('app')
        .component('emButton', {
            bindings: {
                btnClass: '@',
                iconType: '@',
                label: '@',
                type: '@'
            },
            controller: ButtonController,
            templateUrl: './app/components/button/button.html'
        });

    ButtonController.$inject = ['buttonService'];

    function ButtonController(buttonService) {
        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.iconClass = buttonService.getIcon(ctrl.iconType);
            ctrl.btnClass = buttonService.getBtnClass(ctrl.btnType);
            ctrl.btnType = buttonService.getBtnType(ctrl.type);
        }
    }

})();