
angular.module('app', [])
    .controller('homeController', homeController)
    .directive('capitalizeChar', capitalizeChar)
    .directive('gsAngularLogo', gsAngularLogo)
    .directive('capitalizeAll', capitalizeAll);

homeController.$inject = ['$scope'];
function homeController($scope) {
    $scope.title = 'Home Controller';
    $scope.data = '';
}

function capitalizeChar() {
    return {
        restrict: 'EA',
        scope: {
            data: '=',
            makeCapitalize: '&'
        },
        controller: function ($scope) {
            debugger;
        },
        link: function (scope, compile, attribute) {
            debugger;
        }
    }
}

function gsAngularLogo() {
    return {
        template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
    };
}

function capitalizeAll() {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            var capitalize = function (inputValue) {
                if (inputValue == undefined) inputValue = '';
                var capitalized = inputValue.toUpperCase();
                if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            }
            modelCtrl.$parsers.push(capitalize);
            capitalize(scope[attrs.ngModel]); // capitalize initial value
        }
    };
}