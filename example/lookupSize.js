angular.module("lookupSize", []).factory("lookupSize", function ($http, $q, $timeout) {
  return function (width, height) {
    var deferred = $q.defer();
    $timeout(function () {
      deferred.resolve("MEDIUM");
    }, 3000);
    return deferred.promise;
  };
});