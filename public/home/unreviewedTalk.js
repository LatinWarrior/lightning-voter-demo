angular.module('app').directive('unreviewedTalk', function() {
  return {
    templateUrl: '/home/unreviewedTalk.html',
    scope: {
      session: '=',
      voteYes: '&',
      voteNo: '&'
    },
    controllerAs: '$ctrl',
    bindToController: true,
    controller: function() {
      
      var self = this;

      self.yes = function() {
        self.voteYes();
      };

      self.no = function() {
        self.voteNo();
      }
    }
  }
})