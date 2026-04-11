// Module
let taskModule = angular.module('taskApp', [])

// Controller
taskModule.controller('taskCtrl', ($scope, $http) => {

    $scope.newTask = {}
    $scope.editStat = false

    // Read Data
    $scope.readTask = () => {
        $http.get('/api/taskData').then((response) => {
            $scope.task = response.data
        })
    }
    $scope.readTask()

    // Add Task
    $scope.addNewTask = () => {
        $http.post('/api/addTask', $scope.newTask).then((response) => {
            $scope.msg = response.data.message
            $scope.readTask()
            $scope.newTask = {}
        })
    }

    // Delete Task
    $scope.deleteTask = (tID) => {
        $http.delete('/api/deleteTask/' + tID).then((response) => {
            $scope.msg = response.data.message
            $scope.readTask()
        })
    }

    // Edit Task
    $scope.edit = (item) => {
        $scope.newTask = item 
        $scope.editStat = true
    }

    // Update Task
    $scope.updateTask = (item) => {
        $http.put('/api/updateTask/' + item.taskID, item).then((response) => {
            $scope.msg = response.data.message
            $scope.readTask()
            $scope.editStat = false
            $scope.newTask = {}
        })
    }
})