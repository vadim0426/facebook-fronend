import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    back: function () {
      this.transitionToRoute('/facebook');
    },

    create: function () {
      var self = this;

      var name = Ember.$('#name').val();
      var link = Ember.$('#link').val();

      if ( Ember.isBlank(name) || Ember.isBlank(link) ) {
        alert("Please, fill form fields");
      } else {
        var ad = this.get('store').createRecord('ad', {
          name: name,
          link_url: link
        });
        Ember.$('#button-loader').removeClass('hidden');
        ad.save().then(function() {
          Ember.$('#button-loader').addClass('hidden');
          self.transitionToRoute('/facebook');
        });
      }
    }
  }
});
