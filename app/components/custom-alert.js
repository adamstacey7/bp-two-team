import Component from '@ember/component';

export default Component.extend({
  actions: {
    close() {
      this._close();
    },
    customAction(params) {
      this.get('customAction')(...params);
      this._close();
    }
  },
  _close() {
    this.get('toggleVisibility')();
  }
});
