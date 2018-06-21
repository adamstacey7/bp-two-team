import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr('string'),
  start: DS.attr('string'),
  end: DS.attr('string'),
  grade: DS.attr('string'),
  location: DS.attr('string'),
  member: belongsTo()
});
