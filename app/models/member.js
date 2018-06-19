import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: DS.attr('string'),
  role: DS.attr('string'),
  profileImage: DS.attr('string'),
  bio: DS.attr('string'),
  skills: DS.attr(),
  technologies: DS.attr(),
  industries: DS.attr(),
  experiences: DS.hasMany('experience'),
  educations: DS.hasMany('education')
});
