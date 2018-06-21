import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | core-team', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:core-team');
    assert.ok(route);
  });
});
