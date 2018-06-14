import Service from '@ember/service';

export default Service.extend({
  headerTitle: null,
  init() {
    this._super(...arguments);
    this.set('headerTitle', '');
  },
  setHeaderTitle(title) {
    this.set('headerTitle', title);
  },
  getHeaderTitle() {
    return this.get('headerTitle');
  }
});
