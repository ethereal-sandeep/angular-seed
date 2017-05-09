(function(){
  'use strict';

  angular.
      module('view2').
      component('view2', {
        templateUrl: 'components/view2/view2.template.html',
        controller: ('view2Ctrl', View2Ctrl)
      });

    View2Ctrl.$inject = ['$scope'];

    function View2Ctrl($scope) {

    }

})();