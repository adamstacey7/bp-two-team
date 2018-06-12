import DS from 'ember-data';

export default DS.Model.extend({
  basicDetails: DS.belongsTo('basic-details'),
  skills: DS.attr(),
  technologies: DS.attr(),
  industries: DS.attr(),
  education: DS.hasMany('education'),
  professionalExperience: DS.hasMany('professional-experience')
});
