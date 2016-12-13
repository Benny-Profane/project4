(function() {
  angular.module("Sludgify", ["ui.router"])
  .config(function($httpProvider){

    //attach auth interceptor to http requests
    $httpProvider.interceptors.push('authInterceptor');
  })

    .run(['authService', function(authService){
      if (authService.isLoggedIn()) authService.setUser();
    }]);


})();
