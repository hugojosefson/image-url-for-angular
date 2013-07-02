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
      var setStatus = iAttrs.imageUrlStatusModel ? createSetter(iAttrs.imageUrlStatusModel) : noop;
      var setValidity = function (isValid) {
        // Don't $setValidity when asked not to
        if (iAttrs.imageUrlIntegrateWithFormValidity != "false") {
          ngModel.$setValidity("imageUrl", isValid);
        }
      };

      var hasRunAtLeastOnce = false;
      scope.$watch(iAttrs.ngModel, function (newUrl, oldUrl) {

        if (newUrl) {
          if (!hasRunAtLeastOnce || newUrl != oldUrl) {
            hasRunAtLeastOnce = true;
            setStatus("checking");
            setValidity(false);
            var image = new Image();
            image.onload = function () {
              scope.$apply(function () {
                setStatus("ok");
                setValidity(true);
                setWidth(image.width);
                setHeight(image.height);
              });
            };
            image.onerror = function () {
              scope.$apply(function () {
                setStatus("error");
                setValidity(false);
                setWidth(null);
                setHeight(null);
              });
            };
            image.src = newUrl;
          }
        } else {
          setStatus(null);
          setValidity(false);
          setWidth(null);
          setHeight(null);
        }

      });

    }
  };
});
