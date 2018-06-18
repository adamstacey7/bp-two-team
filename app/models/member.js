import DS from 'ember-data';

export default DS.Model.extend({
  basicDetails: DS.belongsTo('basic-detail'),
  skills: DS.attr(),
  technologies: DS.attr(),
  industries: DS.attr(),
  professionalExperiences: DS.hasMany('experience'),
  educations: DS.hasMany('education')
});
