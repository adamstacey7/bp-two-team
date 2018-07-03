import { module, test, setupTest } from 'ember-qunit';

module('Unit | Controller | core-team', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:core-team');
    const service = this.owner.lookup('service:application');
    assert.equal(
      controller.application,
      service,
      'should equal the service injected'
    );
  });
});
