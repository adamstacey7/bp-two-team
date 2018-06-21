import { module, test, setupTest } from 'ember-qunit';

module('Unit | Service | application', function(hooks) {
  setupTest(hooks);

  test('should set the headerTitle', function(assert) {
    const appService = this.owner.lookup('service:application');
    appService.setHeaderTitle('test title');
    assert.equal(appService.get('headerTitle'), 'test title');
  });
});
