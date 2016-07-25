var app = angular.module('bucketList', [])

// MainCtrl
app.controller('MainCtrl', ['$scope', function($scope){
  $scope.test = 'Make your dreams come true!';
  $scope.posts = [
    {title: 'post 1', ratings: 5},
    {title: 'post 2', ratings: 4},
    {title: 'post 3', ratings: 2},
    {title: 'post 4', ratings: 1},
    {title: 'post 5', ratings: 6}
  ];
}]);
