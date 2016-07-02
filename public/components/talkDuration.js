/**
 * Created by Luis Blanco on 6/25/2016.
 */
angular.module('app').filter('talkDuration', function() {
    return function(duration) {
        return "Duration: " + duration + " minutes";
    }
});