import { module, test, setupTest } from 'ember-qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  test('should inject the application service', function(assert) {
    const appService = this.owner.lookup('service:application');
    const appController = this.owner.lookup('controller:application');
    assert.equal(appController.get('app'), appService);
  });
});
