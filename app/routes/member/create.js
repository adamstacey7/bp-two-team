import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  application: service(),
  model() {
    return this.get('store').createRecord('member', {
      experiences: [this.get('store').createRecord('experience', {})],
      educations: [this.get('store').createRecord('education', {})]
    });
  },
  init() {
    this._super(...arguments);
    this.get('application').setHeaderTitle('Create Member');
  },
  _createData() {
    return this.modelFor(this.routeName)
      .save()
      .then(model => this.transitionTo(`/member/${model.get('id')}`));
  },
  actions: {
    submitThree(formData) {
      this._createData(formData);
    }
  }
});
