import Ember from 'ember';

export default Ember.Controller.extend({
  error: "",

  init () {
    this._super();
    Ember.run.schedule("afterRender",this,function() {
      Ember.$('#ad-create-form').parsley();
      Ember.$('#response-error').addClass('hidden');
    });
  },

  errorHadler: function () {
    if (!Ember.isBlank(this.get('error'))) {
      Ember.$('#response-error').removeClass('hidden');
    }
  }.observes('error'),

  actions: {
    back () {
      this.transitionToRoute('/facebook');
    },

    create() {
      var self = this;

      var name = Ember.$('#name').val();
      var link = Ember.$('#link').val();

      if ( Ember.isBlank(name) || Ember.isBlank(link) ) {
        Ember.$('#ad-create-form').parsley().validate()
      } else {
        var ad = this.get('store').createRecord('ad', {
          name: name,
          link_url: link
        });
        Ember.$('#button-loader').removeClass('hidden');
        ad.save().then(function() {
          Ember.$('#button-loader').addClass('hidden');
          Ember.$('#response-error').addClass('hidden');
          self.transitionToRoute('/facebook');
        }, function (reason) {
          Ember.$('#button-loader').addClass('hidden');
          self.set('error', "Schedule End Expired");
        });
      }
    }
  }
});
