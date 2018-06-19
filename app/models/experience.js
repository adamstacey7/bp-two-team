import DS from 'ember-data';

export default DS.Model.extend({
  industry: DS.attr('string'),
  details: DS.attr('string')
});
