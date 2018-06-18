import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('member');
  },
  actions: {
    submit: function() {
      const newMember = this.modelFor(this.routeName)
      newMember.save()
        .then(item => this.transitionTo(`/member/${item.id}`))
        .catch(function(res) {});
    }
  }
});
