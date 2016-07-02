angular.module('app').component('createUsers', {
      templateUrl:'/admin/createUsers',
    bindings: {
        users: '=',
        parseNames: '='
    },
    controller: function(toastr) {

          this.import = function () {
              var people = this.parseNames(this.namesblob);
              people.forEach((function (person) {
                  this.users.createNewUser({
                      email: person.email,
                      password: "pass",
                      firstName: person.firstName,
                      lastName: person.lastName
                  }).catch(function (error) {
                      toastr.error("User already exists: " + person.email);
                  }.bind(this))
              }).bind(this));

              toastr.success("Users Created!");
          }
      }
});