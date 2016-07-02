angular.module('app').component('nav', {
  
    templateUrl: '/nav/nav.html',
    bindings: {
    },
    // controllerAs: "vm",
    // bindToController: true,
    controller: function(currentIdentity, sessions, unreviewedSessionCount) {
      
      this.currentUser = currentIdentity.currentUser;
      
      unreviewedSessionCount.updateUnreviewedSessionCount();
      this.unreviewedSessionCount = unreviewedSessionCount;
    }
});