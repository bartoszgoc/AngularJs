angular.module('app', []).controller('Controller',
    ['$scope', function ($scope) {
        $scope.message = { sentence: 'swiecie!', jeden: 'jeden', dwa: 'dwa' };
    }]);

    angular.module('app', []).controller('Ctrl',
    ['$scope', function ($scope) {
        $scope.wiadomosc = { sentence: 'tralala!'};
    }]);