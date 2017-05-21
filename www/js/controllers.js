angular.module('starter.controllers', ['ionic'])


.controller('LoginCtrl', function($scope, $http, $state, $ionicModal) {
  $scope.login = function(){
     $http({
        url: '',
        method: "POST",
        data: {"username": "winwanwon", "password":"8747cd155b2b655f87bc142ba2af63465a973ceb"},
        timeout: 5000
     }).success(function(data, status, headers, config) {
        $scope.data = data;
        console.log(data);
     });
     $state.go('tab.dash');
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
})

.controller('DashCtrl', function($scope) {})

/*.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
*/

.controller('BookmarkCtrl', function($scope) {})

.controller('NewCtrl', function($scope) {})

.controller('HelpedCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
