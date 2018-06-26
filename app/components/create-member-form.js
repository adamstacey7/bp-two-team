import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.member = {};
  },
  actions: {
    submitOne(member) {
      this.sendAction('submitTwo', member); // eslint-disable-line ember/closure-actions
    }
  }
});
