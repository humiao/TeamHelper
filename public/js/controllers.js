EmployeeManagementCtrl = (function () {
    "use strict";

    function EmployeeManagementCtrl() {
    }

    EmployeeManagementCtrl.prototype.List = function ($scope, $http) {
         $http.get('/api/employee').
         success(function(data, status, headers, config) {
         $scope.eList = data;
         });
    }

    EmployeeManagementCtrl.prototype.Detail = function ($scope, $http) {
        $scope.eItem = {};
        /* $http.get('/api/posts').
         success(function(data, status, headers, config) {
         $scope.eList = data.posts;
         });*/
    }

    EmployeeManagementCtrl.prototype.New = function ($scope, $http, $location) {
        $scope.item = {};
        $scope.submitPost = function () {
            $http.post('/api/employee', $scope.item)
                .success(function (data) {
                    $location.path('/em');
                })
                .error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert(status);
                });
            ;
        };
    }

    return EmployeeManagementCtrl;
})();

var employeeManagementCtrl = new EmployeeManagementCtrl();
