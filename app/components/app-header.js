import Component from '@ember/component';

export default Component.extend({
  title: '',
  init() {
    this._super(...arguments);
    let title = this.get('headerTitle');
    this.set('title', title);
  }
});
