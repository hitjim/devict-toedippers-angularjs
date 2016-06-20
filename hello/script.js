var appname = angular.module('appname', []);
appname.controller('appCtrl', ['$scope',
  function($scope) {
    $scope.greeting = { text: 'Hello' };
  }])

  .controller('thingCtrl', ['$scope',
    function($scope) {
      $scope.myThings = [
        {
          thingType: 'beans',
          types: ['pinto', 'black', 'garbanzo', 'green']
        }, {
          thingType: 'forks',
          types: ['salad', 'BBQ', 'road']
        }, {
          thingType: 'bags',
          types: ['punching', 'grocery', 'donut']
        }
      ];
    }]);
