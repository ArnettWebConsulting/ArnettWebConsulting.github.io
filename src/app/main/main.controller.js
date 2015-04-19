'use strict';

angular.module('LiftTheWeb')
  .controller('MainCtrl', function ($mdSidenav) {
    this.openMenu = function() {
        $mdSidenav('main').toggle();
      };
    this.closeMenu = function() {
        $mdSidenav('main').toggle();
      };
  });
