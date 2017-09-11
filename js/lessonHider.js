angular.module("directivePractice").directive("lessonHider", function() {
  return {
    templateUrl: "./lessonHider.html",
    restrict: "E",
    scope: {
      lesson: "=",
      childlesson: "="
    },
    link: function(scope, elements, attributes) {
      // console.log(scope);
      // // console.log(elements);
      // // console.log(attributes);
    }
  };
});
