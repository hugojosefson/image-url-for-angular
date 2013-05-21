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
      var setValidity = function (isValid) {
        // Don't $setValidity when asked not to
        if (iAttrs.imageUrlIntegrateWithFormValidity != "false") {
          ngModel.$setValidity("imageUrl", isValid);
        }
      };

      scope.$watch(iAttrs.ngModel, function (newUrl, oldUrl) {

        setValidity(false);

        if (newUrl && (newUrl != oldUrl)) {
          var image = new Image();
          image.onload = function () {
            scope.$apply(function () {
              setValidity(true);
              setWidth(image.width);
              setHeight(image.height);
            });
          };
          image.onerror = function () {
            scope.$apply(function () {
              setValidity(false);
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
