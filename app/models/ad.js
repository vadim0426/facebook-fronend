import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  thumbnail_url: DS.attr('string'),
  link_url: DS.attr('string')
});
