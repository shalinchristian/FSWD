var app = angular.module("SubApp", []);

app.controller("SubCont", function($scope) {
    $scope.subjects = ["Math", "Physics", "Chemistry", "Biology"];
});