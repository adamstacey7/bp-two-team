import DS from 'ember-data';

export default DS.Model.extend({
  teamMember: DS.hasMany('team-member')
});
