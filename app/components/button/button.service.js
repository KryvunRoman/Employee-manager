(function () {
    'use strict';

    angular
        .module('app')
        .factory('buttonService', ButtonService);

    ButtonService.$inject = [];

    function ButtonService() {

        return {
            getBtnClass: getBtnClass,
            getBtnType: getBtnType,
            getIcon: getIcon
        };

        function getIcon(iconType) {

            const ICONS = {
                'add': 'glyphicon-plus',
                'edit': 'glyphicon-pencil',
                'canel': 'glyphicon-remove',
                'remove': 'glyphicon-trash',
                'submit': 'glyphicon-send'
            };

            if (typeof iconType !== 'string' || iconType.trim() === '') {
                return '';
            }

            return ICONS[iconType];
        }

        function getBtnClass(btnClass) {

            const DEFAULT_CLASS = 'btn-primary';

            if (typeof btnClass !== 'string' || btnClass.trim() === '') {
                return DEFAULT_CLASS;
            }

            return btnClass;
        }

        function getBtnType(btnType) {

            const DEFAULT_TYPE = 'button';

            if (typeof btnType !== 'string' || btnType.trim() === '') {
                return DEFAULT_TYPE;
            }

            return btnType;
        }
    }

})();