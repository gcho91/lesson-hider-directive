angular.module("directivePractice").controller("lessonCtrl", function($scope) {
  $scope.lessons = [
    "Services",
    "Routing",
    "Directives",
    "Review",
    "Firebase",
    "No server project",
    "Node",
    "Express",
    "Mongo"
  ];
  $scope.parentTest = "Two-way data binding!";
});
