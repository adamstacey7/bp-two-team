import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    console.log(this.get('isVisible'));
  },
  actions: {
    close() {
      this._close();
    }
  },
  _close() {
    this.get('toggleVisibility')();
  }
});
