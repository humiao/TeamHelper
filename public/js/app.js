'use strict';

angular.module('TeamHelperApp', [])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/em', {
                templateUrl: '/tmpl/em/list.html', controller: employeeManagementCtrl.List
            })
            .when('/em/:eId', {
                templateUrl: '/tmpl/em/detail.html', controller: employeeManagementCtrl.Detail
            })
            .when('/em/:eId', {
                templateUrl: '/tmpl/em/new.html', controller: employeeManagementCtrl.New
            })
            .otherwise({
                redirectTo: '/em'
            });
    }]);
