(function(){
  'use strict';

  angular.
      module('view1').
      component('view1', {
        templateUrl: 'components/view1/view1.template.html',
        controller: ('view1Ctrl', View1Ctrl)
      });

    View1Ctrl.$inject = ['$scope'];

    function View1Ctrl($scope) {

    }

})();