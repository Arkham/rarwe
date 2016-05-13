import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',
  songCreationStarted: false,

  isAddingButtonDisabled: Ember.computed.empty('title'),
  noSongs: Ember.computed.empty('model.songs'),
  canCreateSong: Ember.computed.or('songCreationStarted', 'model.songs.length'),

  actions: {
    updateRating: function(params) {
      var song = params.item,
        rating = params.rating;

      song.set('rating', rating);
    },

    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    }
  }
});
