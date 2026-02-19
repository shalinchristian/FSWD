var app = angular.module("subjectApp", []);

app.controller("SubjectController", function($scope) {
    $scope.subjects = ["Math", "Physics", "Chemistry", "Biology"];
});

app.controller("demoMessage", function($scope) {
    $scope.subjects = "Welcome to Angular!";
});

app.controller("CurrencyController", function($scope) {
    $scope.currencies = ["USD", "INR", "EUR"];
    $scope.amount = 0;

    $scope.convert = function() {
        if ($scope.fromCurrency == "USD" && $scope.toCurrency == "INR") {
            $scope.result = $scope.amount * 83;
        } else {
            $scope.result = $scope.amount;
        }
    };
});

app.controller("displayEmployee", function($scope) {
    $scope.employee = [
        {
            EmpID: 1,
            EmpName: "John",
            Department: "IT",
            salary: 50000,
            Contact: "1234567890",
            photo: "https://via.placeholder.com/60"
        },
        {
            EmpID: 2,
            EmpName: "Sara",
            Department: "HR",
            salary: 45000,
            Contact: "9876543210",
            photo: "https://via.placeholder.com/60"
        }
    ];
});
