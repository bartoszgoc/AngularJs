var app = angular.module('app', ['ngResource']);

app.controller("defaultCtrl", function ($scope, FileDataService){
    $scope.files = [
        {name: 'Plik 1.', URL: 'plik-testowy-1.json'},
        {name: 'Plik 2.', URL: 'plik-testowy-2.json'},
        {name: 'Plik 3.', URL: 'plik-testowy-3.json'}
    ];
    $scope.getFileData = function (file) {
        FileDataService.getFileData(file).then(function (result){
            $scope.fileData = result;
        }, function (result){
            alert("Wystapil blad.");
        });
    };
});

app.$inject = ['$scope', 'FileDataSerivce'];
app.factory('FileDataService', ['$http', '$q', function($http){
    var factory = {
        getFileData: function (file) {
            console.log(file);
            console.log("hehe");
            var data =$http({method: 'GET', url: file.URL});
            console.log(data);
            return data;
        }
    }
    return factory;
}]);