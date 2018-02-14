angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function($firebaseRefProvider) {
    var config = {
      apiKey: "AIzaSyA70nWar3hOGuAeuxSYbDAKmh6dYMGIaXI",
      authDomain: "contacts-manager-5ad88.firebaseapp.com",
      databaseURL: "https://contacts-manager-5ad88.firebaseio.com",
      projectId: "contacts-manager-5ad88",
      storageBucket: "contacts-manager-5ad88.appspot.com",
      messagingSenderId: "1014464233232"
    };
    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });
    firebase.initializeApp(config);
  })
  .run(function ($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
      .requireAuthentication()
      .catch(function() {
        return $state.target('auth.login');
      });
    })
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    })
  });
