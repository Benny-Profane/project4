(function(){
  'use strict'

angular
  .module('Sludgify')
  .controller("SongsController", SongsController);

SongsController.$inject = ['$http', '$scope'];

function SongsController($http, $scope){
 var vm = this;
 vm.album = [];

  var searchAlbums = function () {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: 'hello',
            type: 'album'
        }
    }).then(function (response) {
        console.log(response)
        vm.album = response
        $scope.$apply()
    });
};

searchAlbums();

}


})();
