import Route from '@ember/routing/route';

export default Route.extend({
  _saveData() {
    const model = this.modelFor(this.routeName);
    return model
      .save()
      .then(() => this.transitionTo(`/member/${model.get('id')}`));
  },
  actions: {
    submitTwo() {
      this._saveData();
    }
  }
});
