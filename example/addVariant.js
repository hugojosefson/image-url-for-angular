var module = angular.module("addVariant", ["imageUrl", "lookupSize"]);

module.directive("addVariant", function (lookupSize) {
  return {
    scope: {
      image: "=addVariant"
    },
    templateUrl: "addVariantTemplate.html",
    replace: true,
    link: function (scope, iElement, iAttrs) {

      scope.addNewVariant = function () {
        scope.image.variants[scope.newVariant.size] = scope.newVariant.url;
        scope.newVariant.url = null;
      };

      scope.$watch("newVariant.height", function (newHeight, oldHeight) {
        if (newHeight && (newHeight != oldHeight)) {
          lookupSize(scope.newVariant.width, newHeight).then(function (size) {
            scope.newVariant.size = size;
          });
        } else {
          scope.newVariant.size = null;
        }
      });

    }
  };
});
