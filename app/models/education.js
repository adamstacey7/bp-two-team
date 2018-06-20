import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr(),
  startDate: DS.attr(),
  endDate: DS.attr(),
  member: belongsTo()
});
