import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      ads: this.store.findAll('ad')
    });
  }
});
