angular
    .module('app')
    .component('profile', {
        templateUrl: '/profile/profile.html',
        bindings: {
            userProfile: '='
        },
        controller: function ($location, toastr, currentIdentity) {

            this.user = angular.copy(currentIdentity.currentUser);

            this.save = function () {
                currentIdentity.updateUser(this.user);
                toastr.success('Profile Saved!');
            };

            this.cancel = function () {
                $location.path('/home');
            };
        }

    });