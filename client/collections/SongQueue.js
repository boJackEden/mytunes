// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this)
    this.on('ended', function(){
      this.at(0).set('playcount', this.at(0).get('playcount') + 1);
      this.remove(this.at(0));
      if(this.length > 0){
        this.playFirst();
      }
    })
    this.on('dequeue', function(song){
      this.remove(song);
    })
  },
  playFirst: function(){
    this.at(0).play();
  }

});
