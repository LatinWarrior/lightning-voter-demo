angular.module('app').component('sessionDetail', {

    templateUrl: '/sessions/sessionDetail.html',
    bindings: {
      session: '=',
      initialCollapsed: '@'
    },
    // bindToController: true,
    // controllerAs: 'vm',
    controller: function() {
    }
});
