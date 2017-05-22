angular.module('starter.controllers', ['ionic'])


.controller('LoginCtrl', function($scope, $http, $state, $ionicModal, $ionicPopup) {

  // LOGIN API
  $scope.login = function(){
     $http({
        url: 'http://www.winwanwon.in.th/petme/login_check.php',
        method: "POST",
        data: { 'username': $scope.login.username,
                'password': $scope.login.password,
              },
        headers: {'Content-Type': 'application/json'},
     }).success(function(data, status, headers, config) {
       if(/success/.test(data)){
          $state.go("tab.dash");
        } else {
          var alertPopup = $ionicPopup.alert({
            title: 'Incorrect Username or Password'
          });
        }
     });
  }; 

  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  $scope.regis = {};

  $scope.signUp = function(){
    $http({
        url: 'http://www.winwanwon.in.th/petme/register.php',
        method: "POST",
        data: { 'username': $scope.regis.regis_username,
                'password': $scope.regis.regis_password,
                'password_con': $scope.regis.regis_password_con,
                'email': $scope.regis.email,
                'firstname': $scope.regis.firstname,
                'lastname': $scope.regis.lastname,
                'displayname': $scope.regis.displayname,
                'dob': $scope.regis.dob,
                'sex': $scope.regis.sex,
                'likedogcat': $scope.regis.likedogcat
              },
        headers: {'Content-Type': 'application/json'},
     }).success(function(data, status, headers, config) {
        $scope.modal.hide();
        console.log(data);
     });
  }
})

.controller('DashCtrl', function($scope) {})

.controller('BookmarkCtrl', function($scope) {})

.controller('NewCtrl', function($scope) {})

.controller('HelpedCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
