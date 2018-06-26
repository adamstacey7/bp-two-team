import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  start: DS.attr('string'),
  end: DS.attr('string'),
  grade: DS.attr('string'),
  location: DS.attr('string'),
  member: DS.belongsTo()
});
