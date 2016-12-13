(function(){
  'use strict'

angular
  .module('Sludgify')
  .config(AppRoutes);

AppRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("homePage", {
      url: "/",
      templateUrl: "/templates/home.html",
      controller: "LoginController",
      controllerAs: 'vm'
    })
    .state("aboutPage", {
      url: "/about",
      templateUrl: '/templates/about.html'
    })
    .state('register',{
      url: "/register",
      templateUrl: "/templates/register.html",
      controller: "UsersController",
      controllerAs: "vm"
    })
    .state("songs",{
      url: "/songs",
      templateUrl: "/templates/songs.html",
      controller: "SongsController",
      controllerAs: "vm"
    });

  $urlRouterProvider.otherwise("/")
}

})();
