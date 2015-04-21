'use strict';

angular.module('LiftTheWeb')
  .controller('MainCtrl', function ($mdSidenav, $interval) {
     var self = this;
      
      this.macCount = 1;
      this.ipadCount = 1;
      this.iphoneCount = 1;
  
//      $interval(function(){
//        if(self.macCount == 4){
//          self.macCount = 1
//        }
//        else {
//        self.macCount++
//        }
//      }, 3000)
//    
//      $interval(function(){
//          if(self.ipadCount == 4){
//          self.ipadCount = 1
//        }
//        else {
//        self.ipadCount++
//        }
//      }, 3500)
//    
//      $interval(function(){
//          if(self.iphoneCount == 4){
//          self.iphoneCount = 1
//        }
//        else {
//        self.iphoneCount++
//        }
//      }, 4100)
      
    this.openMenu = function() {
        $mdSidenav('main').toggle();
      };
    this.closeMenu = function() {
        $mdSidenav('main').toggle();
      };
  });
