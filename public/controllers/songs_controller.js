(function(){
  'use strict'

angular
  .module('Sludgify')
  .controller("SongsController", SongsController);

SongsController.$inject = ['$http', '$scope', '$log'];

function SongsController($http, $scope, $log) {

 var vm = this;
     vm.search = searchGenre;
     vm.image = '';
     vm.album = '';
     vm.songName = '';
     vm.selectedSong = {};
     $scope.genre = '';
     $scope.mind = '';
     vm.playSong = playSong
     vm.pauseSong = pauseSong
     vm.isPlaying = false
     vm.songToggle = songToggle
     vm.imagePlay = imagePlay
     vm.imagePause = imagePause

//Search using Spotify Web API
function searchGenre () {
    $.ajax({
        url: `https://api.spotify.com/v1/search?type=track&limit=1&q=${$scope.mind}%20genre:%22${encodeURI($scope.genre)}%22`,
    }).then(function (response) {
      console.log(response)
        if(response.tracks.items[0] === undefined){
          // apply default
          // inform the user somehow that they need to make another searh
          vm.selectedSong.image = "https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg";
          vm.selectedSong.genre = "Try Again!"
        } else {
          // design card to show what you found
          vm.selectedSong.audioTrack = new Audio(response.tracks.items[0].preview_url);
          vm.selectedSong.image = response.tracks.items[0].album.images[1].url
          vm.selectedSong.genre = response.tracks.items[0].artists[0].name
          vm.selectedSong.album = response.tracks.items[0].album.name
          vm.selectedSong.songName = response.tracks.items[0].name
        }
        $scope.$apply()
    });
};

//Toggles Audio between playSong() & pauseSong()
function songToggle() {
    if (vm.isPlaying) {
      vm.pauseSong();
      vm.imagePause();
    } else {
      vm.playSong();
      vm.imagePlay();
    }
    vm.isPlaying = !vm.isPlaying
}

//Plays Songs
function playSong() {
  if(vm.selectedSong.audioTrack !== undefined){
    vm.selectedSong.audioTrack.play();
  }
}
//Pauses Song
function pauseSong() {
  vm.selectedSong.audioTrack.pause()
}

//Highlight image
function imagePlay(){
  $('#imageRespond').addClass('play')
}

//Un-highlight Image
function imagePause(){
  $('#imageRespond').removeClass('play')
}

}
})();
