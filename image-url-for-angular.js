/**
 * Declares AngularJS module <code>imageUrl</code>.
 *
 * For documentation see https://github.com/hugojosefson/image-url-for-angular#readme
 */
var imageUrlModule = angular.module("imageUrl", []);

imageUrlModule.directive("imageUrl", function ($parse) {
  return {
    restrict: "A",
    scope: false,
    require: "ngModel",
    link: function (scope, iElement, iAttrs, ngModel) {
      function curry(fn, firstArgument) {
        return fn.bind(this, firstArgument);
      }

      function createSetter(path) {
        return curry($parse(path).assign, scope);
      }

      function noop() {
      }

      var setWidth = iAttrs.imageUrlWidthModel ? createSetter(iAttrs.imageUrlWidthModel) : noop;
      var setHeight = iAttrs.imageUrlHeightModel ? createSetter(iAttrs.imageUrlHeightModel) : noop;

      scope.$watch(iAttrs.ngModel, function (newUrl, oldUrl) {

        ngModel.$setValidity("imageUrl", false);

        if (newUrl && (newUrl != oldUrl)) {
          var image = new Image();
          image.onload = function () {
            scope.$apply(function () {
              ngModel.$setValidity("imageUrl", true);
              setWidth(image.width);
              setHeight(image.height);
            });
          };
          image.onerror = function () {
            scope.$apply(function () {
              ngModel.$setValidity("imageUrl", false);
              setWidth(null);
              setHeight(null);
            });
          };
          image.src = newUrl;
        } else {
          setWidth(null);
          setHeight(null);
        }

      });

    }
  };
});
