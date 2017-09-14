import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addForm: function () {
      this.transitionToRoute('/facebook/add');
    }
  }
});
