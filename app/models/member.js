import DS from 'ember-data';

export default DS.Model.extend({
  basicDetails: DS.belongsTo('basic-details'),
  skills: DS.attr(),
  technologies: DS.attr(),
  industries: DS.attr(),
  professionalExperiences: DS.hasMany('professional-experience'),
  educations: DS.hasMany('education')
});
