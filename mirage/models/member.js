import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  experiences: hasMany('experience'),
  educations: hasMany('education')
});
