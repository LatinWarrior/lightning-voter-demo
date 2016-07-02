angular.module('app').component('unreviewedTalk', {
    templateUrl: '/home/unreviewedTalk.html',
    bindings: {
      session: '=',
      voteYes: '&',
      voteNo: '&'
    },
    //controllerAs: '$ctrl',
    //bindToController: true,
    controller: function() {
      
      var self = this;

      self.yes = function() {
        self.voteYes();
      };

      self.no = function() {
        self.voteNo();
      };
  }
});