angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.data.count = 0;

  $scope.logout = function() {
    $window.localStorage.clear();
    $ionicHistory.clearCache();
    $ionicHistory.clearHistory();
  };

  Links.getAll()
  .then(function(links) {
    $scope.data.links = links;
  });
});
