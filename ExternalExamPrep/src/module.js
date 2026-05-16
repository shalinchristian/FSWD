let app = angular.module('StudentApp', [])

app.controller('StudentCtrl', ($scope, $http) => {
    $scope.students = []

    $scope.loadStudents = () => {
        $http.get('/api/students')
            .then((response) => {
                $scope.students = response.data
            })
    }

    $scope.newStudent = {}

    $scope.addStudent = () => {
        $http.post('/api/students', $scope.newStudent)
            .then((response) => {
                $scope.newStudent = {}
                $scope.loadStudents()
            })
    }

    /*
    $scope.addStudent = function() {
        $http.post('/api/students', $scope.newStudent)
        .then(function(response){
            console.log(response.data)
    
            // clear form
            $scope.newStudent = {}
    
            // reload list
            $scope.loadStudents()
        })
        .catch(function(error){
            console.log("Error:", error)
        })
    }
    */

    $scope.editMode = false

    $scope.editStudent = (student) => {
        $scope.newStudent = angular.copy(student)
        $scope.editMode = true
    }

    $scope.updateStudent = () => {
        $http.put('/api/students/' + $scope.newStudent.id, $scope.newStudent)
            .then(() => {
                $scope.newStudent = {}
                $scope.editMode = false
                $scope.loadStudents()
            })
    }

    $scope.deleteStudent = (id) => {
        $http.delete('/api/students/' + id)
            .then( () => {
                $scope.loadStudents()
            })
            .catch(function (error) {
                console.log("Delete Error:", error)
            })
    }

    $scope.loadStudents()
});
