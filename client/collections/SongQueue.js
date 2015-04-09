// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // on enqueue, check for length and playFirst
    //
  },
  playFirst: function(){
    this.at(0).play();
  }

});
