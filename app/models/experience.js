import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  startDate: DS.attr(),
  endDate: DS.attr(),
});
