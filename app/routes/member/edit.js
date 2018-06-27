import Route from '@ember/routing/route';

export default Route.extend({
  _saveData() {
    return this.modelFor(this.routeName)
      .save()
      .then(model => this.transitionTo(`/member/${model.get('id')}`));
  },
  actions: {
    submitTwo() {
      this._saveData();
    }
  }
});
