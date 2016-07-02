angular.module('app').component('sessionDetailWithVotes', {
    templateUrl: '/sessions/sessionDetailWithVotes.html',
    bindings: {
      session: '=',
      initialCollapsed: '@'
    },
    bindToController: true,
    //controllerAs: 'vm',
    controller: function() {
    }
});
