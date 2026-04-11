
let app = angular.module("StudentApp",[])

app.controller('studentCtrl1', ($scope,$http)=> {
    $scope.students = []
    

    $scope.getStudents= () => {
        $http.get('/api/students').then((response) =>{
            $scope.students = response.data
        })
    }

    $scope.addStudent= () =>{
        $http.post("/api/students", $scope.newStudent).then((response)=>{
            $scope.msg = response.data.message
            $scope.getStudents()
            $scope.newStudent = {}
        })
    }

    $scope.editStudent= (student) => {
        $scope.newStudent = angular.copy(student)
        $scope.isEdit = true
    }

    $scope.updateStudent = () => {
    $http.put('/api/students/' + $scope.newStudent.id, $scope.newStudent)
        .then((response) => {
            $scope.msg = response.data.message
            $scope.getStudents()
            $scope.newStudent = {}
            $scope.isEdit = false
        })
    }

    $scope.deleteStudent = (id) =>{
        $http.delete('/api/students/'+id).then((response) => {
            $scope.msg = response.data.message
            $scope.getStudents()
        })
    }

    $scope.getStudents()
})