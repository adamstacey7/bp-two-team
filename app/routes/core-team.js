import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  application: service(),
  init() {
    this._super(...arguments);
    this.get('application').setHeaderTitle('Team Overview');
  },
  model() {
    return this.get('store').findAll('member');
  }
});
